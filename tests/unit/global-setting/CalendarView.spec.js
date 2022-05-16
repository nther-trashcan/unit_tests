import { shallowMount,mount } from '@vue/test-utils';
import CalendarView from '../../../modules/global-setting/components/CalendarView';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(CalendarView,{
            propsData: {
                activity_types: [{id:"0",name:"Working Hours",background_color:"#FFFFFFFF"},{id:"1",name:"Break",background_color:"#FFFFFFFF"},{id:"2",name:"Appointment Block",background_color:"#FFFFFFFF"},{id:"3",name:"Out Of Office",background_color:"#FFFFFFFF",left_bar_color:"#FFFFFFFF"}], 
                calenderView: {},
                activityTypes: [{id:"0",name:"Working Hours"},{id:"1",name:"Break"},{id:"2",name:"Appointment Block"},{id:"3",name:"Out Of Office"}],
                isEdit: false,
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
        expect(wrapper.vm.activity_types).toEqual([{id:"0",name:"Working Hours",background_color:"#FFFFFFFF"},{id:"1",name:"Break",background_color:"#FFFFFFFF"},{id:"2",name:"Appointment Block",background_color:"#FFFFFFFF"},{id:"3",name:"Out Of Office",background_color:"#FFFFFFFF",left_bar_color:"#FFFFFFFF"}])
        expect(wrapper.vm.calenderView).toEqual({})    
        expect(wrapper.vm.activityTypes).toEqual([{id:"0",name:"Working Hours"},{id:"1",name:"Break"},{id:"2",name:"Appointment Block"},{id:"3",name:"Out Of Office"}])
        expect(wrapper.vm.isEdit).toEqual(false)       
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.activity_types).toEqual('object')
        expect(typeof wrapper.vm.calenderView).toEqual('object')
        expect(typeof wrapper.vm.activityTypes).toEqual('object')  
        expect(typeof wrapper.vm.isEdit).toEqual('boolean')    
    })

    it('is mocking function properly',()=>{
        wrapper.vm.emit()
        expect(wrapper.emitted()["calender-view"][0][0].time_scale_increments).toEqual("halfHour")
        expect(wrapper.emitted()["calender-view"][0][0].first_day_of_week).toEqual("Monday")
        expect(wrapper.emitted()["calender-view"][0][0].default_calender_view).toEqual("Week")
        expect(wrapper.emitted()["calender-view"][0][0].enable_drag_and_drop).toEqual(false)
        expect(wrapper.emitted()["calender-view"][0][0].outOfOfficeBackground).toEqual("#EFEFEFFF")
        expect(wrapper.emitted()["calender-view"][0][0].outOfOfficeLeftBar).toEqual("#FE8D9BFF")
        expect(wrapper.emitted()["calender-view"][0][0].breakBackground).toEqual("#EFEFEFFF")
        expect(wrapper.emitted()["calender-view"][0][0].workingHoursBackground).toEqual("#FFFFFFFF")
        expect(wrapper.emitted()["calender-view"][0][0].appointmentBlockBackground).toEqual("#FFFFFFFF")

        expect(wrapper.emitted()["calender-view"][0][1][0].id).toEqual("0")
        expect(wrapper.emitted()["calender-view"][0][1][0].name).toEqual("Working Hours")

        wrapper.vm.setTimeScaleIncrements("halfAnHour")
        wrapper.vm.setFirstDayOfTheWeek("Tuesday")
        wrapper.vm.setDefaultCalendarView("Day")
        wrapper.vm.setOutOfOfficeBackgroundColor("#FFFFFFFF")
        wrapper.vm.setOutOfOfficeLeftBarColor("#FFFFFFFF")
        wrapper.vm.setBreakBackgroundColor("#FFFFFFFF")
        wrapper.vm.setWorkingHoursBackgroundColor("#EFEFEFFF")
        wrapper.vm.setAppointmentBlockBackgroundColor("#EFEFEFFF")
        
        expect(wrapper.vm.calender_view.time_scale_increments).toEqual("halfAnHour")
        expect(wrapper.vm.calender_view.first_day_of_week).toEqual("Tuesday")
        expect(wrapper.vm.calender_view.default_calender_view).toEqual("Day")
        expect(wrapper.vm.calender_view.outOfOfficeBackground).toEqual("#FFFFFFFF")
        expect(wrapper.vm.calender_view.outOfOfficeLeftBar).toEqual("#FFFFFFFF")
        expect(wrapper.vm.calender_view.breakBackground).toEqual("#FFFFFFFF")
        expect(wrapper.vm.calender_view.workingHoursBackground).toEqual("#EFEFEFFF")
        expect(wrapper.vm.calender_view.appointmentBlockBackground).toEqual("#EFEFEFFF")

        wrapper.vm.setActivityColor()
        expect(wrapper.vm.calender_view.outOfOfficeBackground).toEqual("#FFFFFFFF")
        expect(wrapper.vm.calender_view.outOfOfficeLeftBar).toEqual("#FFFFFFFF")
        expect(wrapper.vm.calender_view.breakBackground).toEqual("#FFFFFFFF")
        expect(wrapper.vm.calender_view.workingHoursBackground).toEqual("#FFFFFFFF")
        expect(wrapper.vm.calender_view.appointmentBlockBackground).toEqual("#FFFFFFFF")
        


    })
});