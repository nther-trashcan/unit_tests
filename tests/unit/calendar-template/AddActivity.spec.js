import { shallowMount,mount } from '@vue/test-utils';
import AddActivity from '../../../modules/calendar-template/components/AddActivity';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = mount(AddActivity,{
            propsData:{
                isEdit: false,
                template_from: "2022-05-10",
                template_to: "",
                reset: false,
                showLocation: [],
                locationMandatory: true,
                activityTypes: [{id:"0",name:"activityTypes1",code:"000"},{id:"1",name:"activityTypes2",code:"111"},{id:"2",name:"activityTypes3",code:"222"}],
                appointmentTypes: [],
                multiLocation: true,
                removeEfectiveThrough: "",
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
        expect(wrapper.vm.isEdit).toEqual(false)
        expect(wrapper.vm.template_from).toEqual("2022-05-10")
        expect(wrapper.vm.template_to).toEqual("")
        expect(wrapper.vm.reset).toEqual(false)
        expect(wrapper.vm.showLocation).toEqual([])
        expect(wrapper.vm.locationMandatory).toEqual(true)
        expect(wrapper.vm.activityTypes).toEqual([{id:"0",name:"activityTypes1",code:"000"},{id:"1",name:"activityTypes2",code:"111"},{id:"2",name:"activityTypes3",code:"222"}])
        expect(wrapper.vm.appointmentTypes).toEqual([])
        expect(wrapper.vm.multiLocation).toEqual(true)
        expect(wrapper.vm.removeEfectiveThrough).toEqual("")
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.isEdit).toEqual('boolean')
        expect(typeof wrapper.vm.template_from).toEqual('string')
        expect(typeof wrapper.vm.template_to).toEqual('string')
        expect(typeof wrapper.vm.reset).toEqual('boolean')
        expect(typeof wrapper.vm.showLocation).toEqual('object')
        expect(typeof wrapper.vm.locationMandatory).toEqual('boolean')
        expect(typeof wrapper.vm.activityTypes).toEqual('object')
        expect(typeof wrapper.vm.appointmentTypes).toEqual('object')
        expect(typeof wrapper.vm.multiLocation).toEqual('boolean')
        expect(typeof wrapper.vm.removeEfectiveThrough).toEqual('string')    
    })

    it('is mocking function properly',()=>{
        wrapper.vm.closeDatePicker()
        expect(wrapper.vm.isCustomRecurrence).toEqual(false)
        wrapper.vm.openDatePicker()
        expect(wrapper.vm.isCustomRecurrence).toEqual(true)
        wrapper.vm.closeDialog()
        expect(wrapper.vm.value).toEqual(false)
        wrapper.vm.setDefaultEffectiveThrough()
        expect(wrapper.vm.removeEfectiveThrough).toEqual("")
        expect(wrapper.emitted().effectiveDefault[0][0]).toEqual('2099-12-31')
        wrapper.setData({activitiesForm:{
            activity_name:"activityTypes1",
            activity_type_id:"0",
            appointment_type_ids:["0","1","2"],
            appointment_block_override:true

        }})
        expect(wrapper.vm.activitiesForm.activity_name).toEqual("activityTypes1")
        expect(wrapper.vm.activitiesForm.activity_type_id).toEqual("0")
        expect(wrapper.vm.activitiesForm.appointment_type_ids).toEqual(["0","1","2"])
        expect(wrapper.vm.activitiesForm.appointment_block_override).toEqual(true)
        wrapper.vm.activityTypeName()
        expect(wrapper.vm.activitiesTypeName).toEqual("activityTypes1")
        expect(wrapper.vm.activitiesForm.appointment_type_ids).toEqual([])
        expect(wrapper.vm.activitiesForm.appointment_block_override).toEqual(false)
        // wrapper.vm.deleteAddedHours({}) // this.templateFrom not defined
        wrapper.vm.editAddedHours(0,{})
        expect(wrapper.vm.isEdit).toEqual(true)
        expect(wrapper.vm.activitiesForm.days).toEqual(["MO", "TU", "WE", "TH", "FR", "SA", "SU"])
        wrapper.vm.setSelectedDays(["MO", "TU", "WE"])
        expect(wrapper.vm.activitiesForm.days).toEqual(["MO", "TU", "WE"])
        wrapper.vm.resetForm()
        expect(wrapper.vm.spacer).toEqual(false)
        expect(wrapper.vm.is_repeat_every).toEqual(true)
        expect(wrapper.vm.isRecurEvery).toEqual(false)
        expect(wrapper.vm.isDays).toEqual(false)
        expect(wrapper.vm.isMonths).toEqual(false)
        expect(wrapper.vm.isCustom).toEqual(false)
        expect(wrapper.vm.activitiesForm.frequency).toEqual("DAILY")
        expect(wrapper.vm.activitiesForm.days).toEqual(["MO", "TU", "WE", "TH", "FR", "SA", "SU"])
        wrapper.vm.showContent("NEVER")
        expect(wrapper.vm.spacer).toEqual(true)
        expect(wrapper.vm.is_repeat_every).toEqual(false)
        wrapper.vm.showContent("CUSTOM")
        expect(wrapper.vm.isCustom).toEqual(true)
        const locs=[
            { id:"0",name:"location1" },{ id:"1",name:"location2" },{ id:"2",name:"location3" }
        ]
        wrapper.vm.setAllLocation(locs)
        expect(wrapper.emitted().locations[0][0]).toEqual(locs)
        wrapper.vm.toggleSelectAllLocation()
        expect(wrapper.vm.activitiesForm.location_ids).toEqual([ '0', '1', '2' ])
        wrapper.vm.setLocation(['0','1'])
        expect(wrapper.vm.activitiesForm.location_ids).toEqual([ '0', '1',])
        wrapper.vm.setActivityTypes('1')
        expect(wrapper.vm.activitiesForm.activity_type_id).toEqual("1")
        wrapper.vm.setAppointmentTypes(['0','2'])
        expect(wrapper.vm.activitiesForm.appointment_type_ids).toEqual(["0","2"])
        const appointmentTypes=[
            {id:"0",name:"appointmentType1"},{id:"1",name:"appointmentType2"},{id:"2",name:"appointmentType3"},
        ]
        wrapper.vm.setAppointmentTypesList(appointmentTypes)
        expect(wrapper.vm.appointmentTypesList).toEqual(appointmentTypes)
        expect(wrapper.vm.activitiesForm.yearly_month_first_dropdown).toEqual(1)
        wrapper.vm.setMonth(2)
        expect(wrapper.vm.activitiesForm.yearly_month_first_dropdown).toEqual(2)
        expect(wrapper.vm.activitiesForm.weeks).toEqual(1)
        wrapper.vm.setWeek(2)
        expect(wrapper.vm.activitiesForm.weeks).toEqual(2)
        expect(wrapper.vm.activitiesForm.second_day_textfield).toEqual("MO")
        wrapper.vm.setDay("TU")
        expect(wrapper.vm.activitiesForm.second_day_textfield).toEqual("TU")
        expect(wrapper.vm.activitiesForm.yearly_month_second_dropdown).toEqual(1)
        wrapper.vm.setMonthYearly(2)
        expect(wrapper.vm.activitiesForm.yearly_month_second_dropdown).toEqual(2)
        wrapper.vm.setStartTime("")
        expect(wrapper.vm.activitiesForm.from).toEqual("")
        wrapper.vm.setEndTime("")
        expect(wrapper.vm.activitiesForm.to).toEqual("")
        expect(wrapper.vm.activitiesForm.activity_from).toEqual("")
        wrapper.vm.setEffectiveFrom("2022-05-11")
        expect(wrapper.vm.activitiesForm.activity_from).toEqual("2022-05-11")
        wrapper.vm.setEffectiveFrom("")
        expect(wrapper.vm.activitiesForm.activity_to).toEqual("")
        wrapper.vm.setEffectiveTo("2099-12-30")
        expect(wrapper.vm.activitiesForm.activity_to).toEqual("2099-12-30")
        expect(wrapper.vm.templateFormDate().format("YYYY-MM-DD")).toEqual('2022-05-09')
        wrapper.vm.addRecurrence()
        expect(wrapper.vm.openRecurrenceModal).toEqual(true)
        wrapper.vm.closeRecurrenceMethod()
        expect(wrapper.vm.openRecurrenceModal).toEqual(false)
        

        
        




        // console.log(wrapper.vm.locations)



        // wrapper.vm.showContent(item)
        

        

        
        
    })
});