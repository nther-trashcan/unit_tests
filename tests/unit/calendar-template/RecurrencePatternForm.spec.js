import { shallowMount,mount } from '@vue/test-utils';
import RecurrencePatternForm from '../../../modules/calendar-template/components/RecurrencePatternForm';


describe('Component', () => {
    let wrapper;
    const VueToastStub={
        render:()=>{},
        methods:{
            resetValidation: () => {},
            validate:()=>{}
        }
    }
    
    beforeEach(() => {
        wrapper = shallowMount(RecurrencePatternForm,{
            propsData: {
                value: {},
                frequencies:[
                    // { value: 'NEVER', text: 'Never' },
                    { value: "DAILY", text: "Daily" },
                    { value: "WEEKLY", text: "Weekly" },
                    { value: "MONTHLY", text: "Monthly" },
                    { value: "YEARLY", text: "Yearly" },
                    { value: "CUSTOM", text: "Custom" },
                  ],
                recurrenceStartDate: "",
                recurrenceEndDate: "",
                disableStartDate: false,
                isEdit: false,
                reset: false,
                minStartDate: "",
                
              },
            stubs:{
                VForm:VueToastStub
            }
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
        expect(wrapper.vm.value).toEqual({})   
        expect(wrapper.vm.frequencies).toEqual([
            // { value: 'NEVER', text: 'Never' },
            { value: "DAILY", text: "Daily" },
            { value: "WEEKLY", text: "Weekly" },
            { value: "MONTHLY", text: "Monthly" },
            { value: "YEARLY", text: "Yearly" },
            { value: "CUSTOM", text: "Custom" },
          ])   
        expect(wrapper.vm.recurrenceStartDate).toEqual("")   
        expect(wrapper.vm.recurrenceEndDate).toEqual("")   
        expect(wrapper.vm.disableStartDate).toEqual(false)   
        expect(wrapper.vm.isEdit).toEqual(false)   
        expect(wrapper.vm.reset).toEqual(false)   
        expect(wrapper.vm.minStartDate).toEqual("")   
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.value).toEqual('object') 
        expect(typeof wrapper.vm.frequencies).toEqual('object') 
        expect(typeof wrapper.vm.recurrenceStartDate).toEqual('string') 
        expect(typeof wrapper.vm.recurrenceEndDate).toEqual('string') 
        expect(typeof wrapper.vm.isEdit).toEqual('boolean') 
        expect(typeof wrapper.vm.reset).toEqual('boolean') 
        expect(typeof wrapper.vm.minStartDate).toEqual('string') 

    })

    it('is mocking function properly',()=>{
        wrapper.vm.inputAllData()
        // expect(wrapper.emitted()["effectiveDefault"][0][0]).toEqual("2099-12-31")
        // expect(wrapper.emitted()["effectiveDefault"]).toEqual(undefined)
        
        expect(wrapper.emitted()["form"][1][0].frequency).toEqual("DAILY")
        expect(wrapper.emitted()["form"][1][0].repeat_in_week).toEqual("01")
        expect(wrapper.emitted()["form"][1][0].repeat_every).toEqual(1)
        expect(wrapper.emitted()["form"][1][0].appointment_block_override).toEqual(false)
        expect(wrapper.emitted()["form"][1][0].days).toEqual(["MO", "TU", "WE", "TH", "FR", "SA", "SU"])
        expect(wrapper.emitted()["form"][1][0].first_day_textfield).toEqual(1)
        expect(wrapper.emitted()["form"][1][0].second_day_textfield).toEqual("MO")
        expect(wrapper.emitted()["form"][1][0].yearly_month_first_dropdown).toEqual(1)
        expect(wrapper.emitted()["form"][1][0].yearly_month_second_dropdown).toEqual(1)
        expect(wrapper.emitted()["form"][1][1]).toEqual(false)
        expect(wrapper.emitted()["effectiveDefault"]).toEqual(undefined)
        wrapper.setData({spacer:false,is_repeat_every:false,isRecurEvery:false,isDays:false,isMonths:false,isYears:false,isCustom:false})
        expect(wrapper.vm.is_repeat_every).toEqual(false)
        wrapper.vm.showContent("DAILY")
        expect(wrapper.vm.is_repeat_every).toEqual(true)
        expect(wrapper.vm.isDays).toEqual(false)
        wrapper.vm.showContent("WEEKLY")
        expect(wrapper.vm.isDays).toEqual(true)
        expect(wrapper.vm.isMonths).toEqual(false)
        wrapper.vm.showContent("MONTHLY")
        expect(wrapper.vm.isMonths).toEqual(true)
        expect(wrapper.vm.isYears).toEqual(false)
        wrapper.vm.showContent("YEARLY")
        expect(wrapper.vm.isYears).toEqual(true)
        expect(wrapper.vm.isCustom).toEqual(false)
        wrapper.vm.showContent("CUSTOM")
        expect(wrapper.vm.isCustom).toEqual(true)

        const val={
            frequency: "WEEKLY",
            select_week_number: "",
            appointment_block_override: true,
            repeat_every: 1,
            red: 64,
            repeat_in_week: "02",
            days: ["MO", "TU", "WE"],
            dates: [],
            weeks: 1,
            first_day_textfield: 2,
            second_day_textfield: "TU",
            yearly_month_first_dropdown: 2,
            yearly_month_second_dropdown: 3,
            radio_btn: "one",
            ends: "on",
            endDate: "",
            afterCount: null,
            date: "",
            r_dates: [],
          }
        wrapper.setData({value:val})
        wrapper.vm.setData()
        expect(wrapper.vm.form.frequency).toEqual("WEEKLY")
        expect(wrapper.vm.form.repeat_in_week).toEqual("02")
        expect(wrapper.vm.form.repeat_every).toEqual(1)
        expect(wrapper.vm.form.appointment_block_override).toEqual(true)
        expect(wrapper.vm.form.days).toEqual(["MO", "TU", "WE"])
        expect(wrapper.vm.form.first_day_textfield).toEqual(2)
        expect(wrapper.vm.form.second_day_textfield).toEqual("TU")
        expect(wrapper.vm.form.yearly_month_first_dropdown).toEqual(2)
        expect(wrapper.vm.form.yearly_month_second_dropdown).toEqual(3)


        expect(wrapper.vm.form.endDate).toEqual("")
        expect(wrapper.vm.form.r_dates).toEqual([])
        wrapper.setData({form:{r_dates:["2100/01/31","2200/01/31","2022/05/31","2022/06/31"]}})
        wrapper.vm.setEndDate("2099/12/31")
        expect(wrapper.vm.form.endDate).toEqual("2099/12/31")
        expect(wrapper.vm.form.r_dates[2]).toEqual("2022/05/31")
        expect(wrapper.vm.form.r_dates[3]).toEqual("2022/06/31")
        wrapper.vm.setStartDate("2022/05/12")
        expect(wrapper.vm.form.date).toEqual("2022/05/12")
        wrapper.vm.setSecondDay(3)
        expect(wrapper.vm.form.second_day_textfield).toEqual(3)
        wrapper.vm.setWeeks(2)
        expect(wrapper.vm.form.weeks).toEqual(2)
        wrapper.vm.resetForm()

        
        expect(wrapper.emitted()["form"][1][0].frequency).toEqual("DAILY")
        expect(wrapper.emitted()["form"][1][0].repeat_in_week).toEqual("01")
        expect(wrapper.emitted()["form"][1][0].repeat_every).toEqual(1)
        expect(wrapper.emitted()["form"][1][0].appointment_block_override).toEqual(false)
        expect(wrapper.emitted()["form"][1][0].days).toEqual(["MO", "TU", "WE", "TH", "FR", "SA", "SU"])
        expect(wrapper.emitted()["form"][1][0].first_day_textfield).toEqual(1)
        expect(wrapper.emitted()["form"][1][0].second_day_textfield).toEqual("MO")
        expect(wrapper.emitted()["form"][1][0].yearly_month_first_dropdown).toEqual(1)
        expect(wrapper.emitted()["form"][1][0].yearly_month_second_dropdown).toEqual(1)
         


        

        
        
    })
});