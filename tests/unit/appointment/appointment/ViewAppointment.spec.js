import { shallowMount,mount } from '@vue/test-utils';
import ViewAppointment from '../../../../modules/appointment/components/appointment/ViewAppointment';
import 'whatwg-fetch';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(ViewAppointment,{
            propsData: {
                appointmentId: 0,
                appointmentStatusList: [],
                timezone: "",
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
        expect(wrapper.vm.appointmentId).toEqual(0)
        expect(wrapper.vm.appointmentStatusList).toEqual([])    
        expect(wrapper.vm.timezone).toEqual("")
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.appointmentId).toEqual("number")
        expect(typeof wrapper.vm.appointmentStatusList).toEqual("object")
        expect(typeof wrapper.vm.timezone).toEqual("string")
    })

    it('is mocking function properly',()=>{
        expect(wrapper.vm.disableEditDeletebtn()).toEqual(false)
        wrapper.setData({
            editNotes:false,
            deleteDialog:false,
            appointmentId:"0",
            form:{
                master_appointment_id:"000",
                start:"2022/04/30"
            }
        })
        expect(wrapper.vm.deleteDialog).toEqual(false)
        wrapper.vm.deleteAppointment() 
        expect(wrapper.vm.deleteDialog).toEqual(true)
        wrapper.vm.confirmDelete("delete","Reason for deletion")
        expect(wrapper.emitted()["delete-appointment"][0][0]).toEqual("0")
        expect(wrapper.emitted()["delete-appointment"][0][1]).toEqual("000")
        expect(wrapper.emitted()["delete-appointment"][0][2]).toEqual(false)
        expect(wrapper.emitted()["delete-appointment"][0][3]).toEqual("Reason for deletion")
        expect(wrapper.vm.deleteDialog).toEqual(false)
        wrapper.vm.changeAppointmentStatus("0","0","0")
        expect(wrapper.vm.setValidTransition([{appointment_id:"0",name:"appointment1"},{appointment_id:"1",name:"appointment2"}])[0].appointment_id).toEqual("0")
        expect(wrapper.vm.setValidTransition([{appointment_id:"0",name:"appointment1"},{appointment_id:"1",name:"appointment2"}])[0].name).toEqual("appointment1")
        expect(wrapper.vm.editNotes).toEqual(false)
        wrapper.vm.editNotesFun()
        expect(wrapper.vm.editNotes).toEqual(true)
        wrapper.vm.saveNotes()
        wrapper.vm.closeViewAppointment()
        wrapper.vm.editAppointment()
        expect(wrapper.emitted()["edit"][0][0].id).toEqual("0")
        wrapper.vm.setAlternateHost({resource_id:"0",name:"resource1"})
        expect(wrapper.vm.form.telehealth_alternate_host.resource_id).toEqual("0")
        expect(wrapper.vm.form.telehealth_alternate_host.name).toEqual("resource1")
        wrapper.vm.telehealthSwitch()
        expect(wrapper.vm.form.telehealth_alternate_host).toEqual(null)
        expect(wrapper.vm.form.telehealth_host).toEqual(null)
        wrapper.vm.setEndTime("06:00 PM")
        expect(wrapper.vm.form.to).toEqual("06:00 PM")
        wrapper.vm.currentDateTime()
        wrapper.vm.recurrenceDates()
        wrapper.vm.timeForResources()
        expect(typeof wrapper.vm.toTimeRule()[0]).toEqual('function')
        expect(typeof wrapper.vm.fromTimeRule()[0]).toEqual('function')
        expect(typeof wrapper.vm.startTimeRules()[0]).toEqual('function')
        expect(typeof wrapper.vm.endTimeRules(0)[0]).toEqual('function')
        
        wrapper.vm.fetchAppointment()
        wrapper.vm.fetchApptRemainingMeetingTime()
        const data={
            appointment_status:"",
            group_session_details:{
                title:"",
                session_type_name:"",
                topics:"",
                group_leaders:"",
            },
            to:"2022/05/31 12:00 PM",
            from:"2099/12/31 06:00 PM",
            patients:[{patient_id:"2",name:"patient3"}],
            location:{
                time_zone_info:{
                    tzinfo_name:"America/Los_Angeles"
                },
            },
            master_appointment_id:"",
            location_id:"",
            notes:"",
            resources:[{resource_id:"0",name:"resource1"},{resource_id:"1",name:"resource2"}],
            appointment_type:{
                id:"0",
                name:"appointmentType1"
            },
            group_session:"",
            telehealth_session:"",
            host_name:"",
            host_email:"",
            alt_host_name:"",
            alt_host_email:""
            
        }
        wrapper.vm.buildForm(data)
        wrapper.vm.setDuration()
        wrapper.vm.setTimeDuration(0)
        wrapper.setData({
            form:{
                to:"2022/05/31 12:00 PM",
                from:"2099/12/31 06:00 PM",
            }
        })
        wrapper.vm.setResourceTime()
        expect(wrapper.vm.form.resources[0].from).toEqual("06:00")
        wrapper.vm.durationRules()
        expect(typeof wrapper.vm.duration_rules[0]).toEqual('function')
        expect(wrapper.vm.DDMMYYYYtoYYYYMMDD("2022-05-31")).toEqual("31-05-2022")
        wrapper.vm.setTimeDurationFrom("2022/05/31",0)
        expect(wrapper.vm.form.resources[0].from).toEqual("2022/05/31")
        wrapper.vm.setTimeDurationTo("2099/12/31",0)
        expect(wrapper.vm.form.resources[0].to).toEqual("2099/12/31")
    })
});