import { shallowMount,mount } from '@vue/test-utils';
import RecurrenceModal from '../../../../modules/appointment/components/appointment/RecurrenceModal';
import moment from "moment"

describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(RecurrenceModal,{
            propsData: {
                openModal: false,
                isEdit: false,
                value: {},
                recurrenceDate:  "" ,
                recurrenceEndDate:  "" ,
                disableStartDate: false,
                minStartDate:  "" ,
                reset: false,
                frequencies: [
                    // { value: 'NEVER', text: 'Never' },
                    { value: "DAILY", text: "Daily" },
                    { value: "WEEKLY", text: "Weekly" },
                    { value: "MONTHLY", text: "Monthly" },
                    { value: "YEARLY", text: "Yearly" },
                    { value: "CUSTOM", text: "Custom" },
                  ],
              },
            
        });
    });
    
    afterEach(() => {
        wrapper.destroy();
    });
    
    it('is a Vue instance', () => {   
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it('is mocking data properly',()=>{
        expect(wrapper.vm.openModal).toEqual(false)
        expect(wrapper.vm.isEdit).toEqual(false)    
        expect(wrapper.vm.value).toEqual({})
        expect(wrapper.vm.recurrenceDate).toEqual("")
        expect(wrapper.vm.recurrenceEndDate).toEqual("")    
        expect(wrapper.vm.disableStartDate).toEqual(false)    
        expect(wrapper.vm.minStartDate).toEqual("")
        expect(wrapper.vm.reset).toEqual(false)    
        expect(wrapper.vm.frequencies).toEqual([
            // { value: 'NEVER', text: 'Never' },
            { value: "DAILY", text: "Daily" },
            { value: "WEEKLY", text: "Weekly" },
            { value: "MONTHLY", text: "Monthly" },
            { value: "YEARLY", text: "Yearly" },
            { value: "CUSTOM", text: "Custom" },
          ])
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.openModal).toEqual('boolean')
        expect(typeof wrapper.vm.isEdit).toEqual('boolean')    
        expect(typeof wrapper.vm.value).toEqual('object')
        expect(typeof wrapper.vm.recurrenceDate).toEqual('string')
        expect(typeof wrapper.vm.recurrenceEndDate).toEqual('string')    
        expect(typeof wrapper.vm.disableStartDate).toEqual('boolean')    
        expect(typeof wrapper.vm.minStartDate).toEqual('string')
        expect(typeof wrapper.vm.reset).toEqual('boolean')    
        expect(typeof wrapper.vm.frequencies).toEqual('object')

    })

    it('is mocking function properly',()=>{
        expect(wrapper.vm.localerrormessage).toEqual([])
        const form={
            frequency: "DAILY",
            select_week_number: "",
            appointment_block_override: true,
            repeat_every: 0,
            red: 64,
            repeat_in_week: "02",
            days: ["MO", "TU", "WE","TH","FR","SA","SU"],
            dates: [],
            weeks: 1,
            first_day_textfield: 0,
            second_day_textfield: "TU",
            yearly_month_first_dropdown: 2,
            yearly_month_second_dropdown: 3,
            radio_btn: "one",
            ends: "after",
            endDate: "",
            afterCount: null,
            date: "",
            r_dates: [],
          }
        wrapper.vm.setForm(form)
        expect(wrapper.vm.form.date).toEqual("")
        wrapper.vm.submit()
        expect(wrapper.vm.localerrormessage[0]).toEqual("Please Enter Start Date")
        wrapper.setData({form:{date:"2022/05/31"}})
        wrapper.vm.submit()
        expect(wrapper.vm.localerrormessage[0]).toEqual("Repeat every should be greater than zero")
        wrapper.setData({form:{repeat_every:1000}})
        wrapper.vm.submit()
        expect(wrapper.vm.localerrormessage[0]).toEqual("Repeat every can not be greater than 999")
        wrapper.setData({form:{repeat_every:1,frequency:"MONTHLY"}})
        wrapper.vm.submit()
        expect(wrapper.vm.localerrormessage[0]).toEqual("Day should be greater than zero")
        wrapper.setData({form:{first_day_textfield:32}})
        wrapper.vm.submit()
        expect(wrapper.vm.localerrormessage[0]).toEqual("Day can not be greater than 31")
        wrapper.setData({form:{first_day_textfield:1,frequency:"CUSTOM"}})
        wrapper.vm.submit()
        expect(wrapper.vm.localerrormessage[0]).toEqual("Please select date(s)")
        wrapper.setData({form:{r_dates:["2022/05/31","2022/06/30"]}})
        wrapper.vm.submit()
        expect(wrapper.vm.localerrormessage[0]).toEqual("Please Enter Occurrences")
        wrapper.setData({form:{afterCount:1000}})
        wrapper.vm.submit()
        expect(wrapper.vm.localerrormessage[0]).toEqual("Occurrences can not be greater than 999")
        wrapper.setData({form:{ends:"on"}})
        wrapper.vm.submit()
        expect(wrapper.vm.localerrormessage[0]).toEqual("Please Enter End Date")
        wrapper.setData({form:{endDate:"2022/04/30"}})
        wrapper.vm.submit()
        expect(wrapper.vm.localerrormessage[0]).toEqual("End Date should not be less than Present Date")
        wrapper.setData({form:{endDate:"2099/12/31",afterCount:1000}})
        wrapper.vm.submit()
        expect(wrapper.vm.localerrormessage[0]).toEqual("After Occurrence count should not be greater than 999")
        wrapper.setData({form:{afterCount:10,repeat_every:1000}})
        wrapper.vm.submit()
        expect(wrapper.vm.localerrormessage[0]).toEqual("Recur Every should not be greater than 999")
        wrapper.setData({form:{repeat_every:1}})
        wrapper.vm.submit()
        expect(wrapper.emitted()["form"][0][0].frequency).toEqual("CUSTOM")
        expect(wrapper.emitted()["form"][0][0].date).toEqual("2022/05/31")
        expect(wrapper.emitted()["form"][0][0].repeat_every).toEqual(1)
        expect(wrapper.emitted()["form"][0][0].first_day_textfield).toEqual(1)
        expect(wrapper.emitted()["form"][0][0].endDate).toEqual("2099/12/31")
        expect(wrapper.emitted()["form"][0][0].r_dates).toEqual(["2022/05/31","2022/06/30"])
        expect(wrapper.emitted()["form"][0][0].ends).toEqual("on")
        expect(wrapper.emitted()["form"][0][0].afterCount).toEqual(10)
        expect(wrapper.vm.localerrormessage).toEqual([])
        expect(wrapper.emitted()["close-modal"][0][0]).toEqual(undefined)








        
        

    })
});