import { shallowMount,mount } from '@vue/test-utils';
import CardViewCalendarAppointment from '../../../../modules/appointment/components/appointment/CardViewCalendarAppointment';
import 'whatwg-fetch';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(CardViewCalendarAppointment,{
            propsData: {
                userPermittedToStart: false,
                appointmentId: 0 ,
                patientIds: 0 ,
                appointmentStatusList:[] ,
                dialog: false,
                clientX: 0 ,
                clientY: 0 ,
                timezone:  "" ,
                patientView: false,
                clickOutside: false,
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
        expect(wrapper.vm.userPermittedToStart).toEqual(false)
        expect(wrapper.vm.appointmentId).toEqual(0)    
        expect(wrapper.vm.patientIds).toEqual(0)
        expect(wrapper.vm.appointmentStatusList).toEqual([])    
        expect(wrapper.vm.dialog).toEqual(false) 
        expect(wrapper.vm.clientX).toEqual(0) 
        expect(wrapper.vm.clientY).toEqual(0) 
        expect(wrapper.vm.timezone).toEqual("") 
        expect(wrapper.vm.patientView).toEqual(false) 
        expect(wrapper.vm.clickOutside).toEqual(false) 
        
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.userPermittedToStart).toEqual('boolean')
        expect(typeof wrapper.vm.appointmentId).toEqual('number')    
        expect(typeof wrapper.vm.patientIds).toEqual('number')
        expect(typeof wrapper.vm.appointmentStatusList).toEqual('object')    
        expect(typeof wrapper.vm.dialog).toEqual('boolean') 
        expect(typeof wrapper.vm.clientX).toEqual('number') 
        expect(typeof wrapper.vm.clientY).toEqual('number') 
        expect(typeof wrapper.vm.timezone).toEqual('string') 
        expect(typeof wrapper.vm.patientView).toEqual('boolean') 
        expect(typeof wrapper.vm.clickOutside).toEqual('boolean')     
    })

    it('is mocking function properly',()=>{
        wrapper.setData({
            appointmentInfo:{
                master_appointment_id:"000",
                from:"2022/04/30"
            },
            appointmentId:"0",
            viewSelection:false,
            deleteDialog:false
        })
        expect(wrapper.vm.viewSelection).toEqual(false)
        expect(wrapper.vm.deleteDialog).toEqual(false)
        wrapper.vm.deleteAppointment()
        expect(wrapper.vm.viewSelection).toEqual(true)
        expect(wrapper.vm.deleteDialog).toEqual(true)
        wrapper.vm.confirmDelete("delete",false,"Reason for deletion")
        expect(wrapper.emitted()["delete-appointment"][0][0]).toEqual("0")
        expect(wrapper.emitted()["delete-appointment"][0][1]).toEqual("000")
        expect(wrapper.emitted()["delete-appointment"][0][2]).toEqual(false)
        expect(wrapper.emitted()["delete-appointment"][0][3]).toEqual("Reason for deletion")
        expect(wrapper.vm.deleteDialog).toEqual(false)
        expect(wrapper.emitted()["force-close"][0][0]).toEqual(undefined)
        wrapper.vm.changeAppointmentStatus("0","1","0","0")
        expect(wrapper.emitted()["on-change-status"][0][0]).toEqual("0")
        expect(wrapper.emitted()["on-change-status"][0][1]).toEqual("1")
        expect(wrapper.emitted()["on-change-status"][0][2]).toEqual("0")
        expect(wrapper.emitted()["on-change-status"][0][3]).toEqual("0")
        expect(wrapper.emitted()["close"][0][0]).toEqual(undefined)
        expect(wrapper.emitted()["force-close"][1][0]).toEqual(undefined)
        const appointmentInfo={
            patients:[{patient_id:"0",id:"0",name:"patient1",is_enabled:false,patient_status:{id:"0",alias:"alias1",name:"patient1",valid_transition:false,document:{content:"content1"}}},{patient_id:"1",id:"1",name:"patient2",is_enabled:true,patient_status:{id:"1",alias:"alias2",name:"patient2",valid_transition:true,document:{content:"content2"}}}],
            resources:[{resource_id:"0",name:"resource1"},{resource_id:"1",name:"resource2"}]
        }
        const item={
            appointment_type:{
                color:"#ffffff"
            }
        }
        expect(wrapper.vm.getStyleCard(appointmentInfo).left).toEqual("250px")
        expect(wrapper.vm.getStyleCard(appointmentInfo).top).toEqual("200px")
        expect(wrapper.vm.getStyle(item)["border-left"]).toEqual("8px solid#ffffff")
        expect(wrapper.vm.getStyleGroup(item)["border-left"]).toEqual("8px solid #ae10ff")
        const appointment=[{id:"0",name:"appointment1",is_enabled:false,patient_status:{alias:"alias",name:"patient1",valid_transition:false,document:{content:"content1"}}},{id:"1",name:"appointment2",is_enabled:true,patient_status:{alias:"alias",name:"patient2",valid_transition:true,document:{content:"content2"}}}]
        const statusList=[{id:"0",name:"statis1"},{id:"1",name:"statis2"}]
        expect(wrapper.vm.setValidTransition(appointment,statusList)).toEqual([])
        expect(wrapper.vm.disableEditDelete()).toEqual(true)
        wrapper.vm.viewAppointment()
        expect(wrapper.emitted()["view"][0][0]).toEqual(undefined)
        wrapper.vm.viewGroupSession()
        expect(wrapper.emitted()["view-group"][0][0]).toEqual(undefined)
        wrapper.vm.editAppointment()
        expect(wrapper.emitted()["edit"][0][0]).toEqual(undefined)
        wrapper.vm.editGroupSession()
        expect(wrapper.emitted()["edit-group-session"][0][0]).toEqual(undefined)
        wrapper.vm.closeAppointment()
        expect(wrapper.emitted()["force-close"][0][0]).toEqual(undefined)
        wrapper.vm.fetchAppointment()
        wrapper.vm.getDuration()
        wrapper.vm.fetchApptRemainingMeetingTime()
        wrapper.setData({
            appointmentStatusList:[{id:"0",name:"appointmentStatus1",document:{content:"content1"}},{id:"1",name:"appointmentStatus2",document:{content:"content2"}}]
        })
        wrapper.vm.getIcon({id:"0"})
        wrapper.vm.getResourcesNames(appointmentInfo)
        wrapper.setData({
            patientIds:"0"
        })
        expect(wrapper.vm.getPatientStatusIcon(appointmentInfo)).toEqual('content1')
        expect(wrapper.vm.getPatientStatusIconTooltip(appointmentInfo)).toEqual('alias1')
        expect(wrapper.vm.getPatientStatusValidTransition(appointmentInfo)).toEqual(false)
        
    })
});