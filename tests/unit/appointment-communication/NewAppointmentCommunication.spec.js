import { shallowMount,mount } from '@vue/test-utils';
import NewAppointmentCommunication from '../../../modules/appointment-communication/components/NewAppointmentCommunication';
import 'whatwg-fetch'


describe('Component', () => {
    let wrapper;
    const VueStubForm={
        render:()=>{},
        methods:{
            reset:()=>{},
            resetValidation:()=>{}
        }
    }
    
    beforeEach(() => {
        wrapper = shallowMount(NewAppointmentCommunication,{
            propsData: {
                communicationForm: {
                    id: "",
                    name: "",
                    appointment_type_ids: [],
                    preferred_communication: false,
                    enabled: true,
                    send_to: [],
                    start_date: "",
                    end_date: "",
                    location_ids: [],
                    providers: [],
                    communication: {
                      event_based_checked: false,
                      time_based_checked: false,
                      exception_based_checked: false,
                      repeat_checked: false,
                    },
                    communication_channels: [],
                    criteria: {
                      event_based: [],
                      time_based: [],
                      appointment_updates: [],
                    },
                },
                reset: false,
                rulesCheck: false,
                resetOnSaveAndCopy: false,
                apiMessage:[] ,
                localMessage:[] ,
                communicationId: "" ,
                copyCommunication: false,
              },
            stubs:{
                VForm:VueStubForm,
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
        
        expect(wrapper.vm.communicationForm.id).toEqual("")
        expect(wrapper.vm.communicationForm.name).toEqual("")
        expect(wrapper.vm.communicationForm.appointment_type_ids).toEqual([])
        expect(wrapper.vm.communicationForm.preferred_communication).toEqual(false)
        expect(wrapper.vm.communicationForm.enabled).toEqual(true)
        expect(wrapper.vm.communicationForm.send_to).toEqual([])
        expect(wrapper.vm.communicationForm.start_date).toEqual("")
        expect(wrapper.vm.communicationForm.end_date).toEqual("")
        expect(wrapper.vm.communicationForm.location_ids).toEqual([])
        expect(wrapper.vm.communicationForm.providers).toEqual([])
        expect(wrapper.vm.communicationForm.communication.event_based_checked).toEqual(false)
        expect(wrapper.vm.communicationForm.communication.time_based_checked).toEqual(false)
        expect(wrapper.vm.communicationForm.communication.exception_based_checked).toEqual(false)
        expect(wrapper.vm.communicationForm.communication.repeat_checked).toEqual(false)
        expect(wrapper.vm.communicationForm.communication_channels).toEqual([])
        expect(wrapper.vm.communicationForm.criteria.event_based).toEqual([])
        expect(wrapper.vm.communicationForm.criteria.time_based).toEqual([])
        expect(wrapper.vm.communicationForm.criteria.appointment_updates).toEqual([])
        expect(wrapper.vm.reset).toEqual(false)
        expect(wrapper.vm.rulesCheck).toEqual(false)
        expect(wrapper.vm.resetOnSaveAndCopy).toEqual(false)
        expect(wrapper.vm.apiMessage).toEqual([])
        expect(wrapper.vm.localMessage).toEqual([])
        expect(wrapper.vm.communicationId).toEqual("")
        expect(wrapper.vm.copyCommunication).toEqual(false)
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.communicationForm.id).toEqual('string')
        expect(typeof wrapper.vm.communicationForm.name).toEqual('string')
        expect(typeof wrapper.vm.communicationForm.appointment_type_ids).toEqual('object')
        expect(typeof wrapper.vm.communicationForm.preferred_communication).toEqual('boolean')
        expect(typeof wrapper.vm.communicationForm.enabled).toEqual('boolean')
        expect(typeof wrapper.vm.communicationForm.send_to).toEqual('object')
        expect(typeof wrapper.vm.communicationForm.start_date).toEqual('string')
        expect(typeof wrapper.vm.communicationForm.end_date).toEqual('string')
        expect(typeof wrapper.vm.communicationForm.location_ids).toEqual('object')
        expect(typeof wrapper.vm.communicationForm.providers).toEqual('object')
        expect(typeof wrapper.vm.communicationForm.communication.event_based_checked).toEqual('boolean')
        expect(typeof wrapper.vm.communicationForm.communication.time_based_checked).toEqual('boolean')
        expect(typeof wrapper.vm.communicationForm.communication.exception_based_checked).toEqual('boolean')
        expect(typeof wrapper.vm.communicationForm.communication.repeat_checked).toEqual('boolean')
        expect(typeof wrapper.vm.communicationForm.communication_channels).toEqual('object')
        expect(typeof wrapper.vm.communicationForm.criteria.event_based).toEqual('object')
        expect(typeof wrapper.vm.communicationForm.criteria.time_based).toEqual('object')
        expect(typeof wrapper.vm.communicationForm.criteria.appointment_updates).toEqual('object')
        expect(typeof wrapper.vm.reset).toEqual('boolean')
        expect(typeof wrapper.vm.rulesCheck).toEqual('boolean')
        expect(typeof wrapper.vm.resetOnSaveAndCopy).toEqual('boolean')
        expect(typeof wrapper.vm.apiMessage).toEqual('object')
        expect(typeof wrapper.vm.localMessage).toEqual('object')
        expect(typeof wrapper.vm.communicationId).toEqual('string')
        expect(typeof wrapper.vm.copyCommunication).toEqual('boolean')   
    })

    it('is mocking function properly',()=>{
        wrapper.vm.getDateValue(true)
        expect(wrapper.vm.endDateMandatory).toEqual(true)
        expect(typeof wrapper.vm.startDateRules("2022/05/31")[0]).toEqual('function')
        expect(typeof wrapper.vm.endDateRules("2099/12/31")[0]).toEqual('function')
        wrapper.vm.errorlocal("This is a local error message")
        expect(wrapper.vm.localerrormessage).toEqual(["This is a local error message"])
        wrapper.vm.error("This is a api error message")
        expect(wrapper.vm.apierrormessage).toEqual(["This is a api error message"])
        wrapper.vm.setStartDate("2022/05/31")
        expect(wrapper.vm.communicationForm.start_date).toEqual("2022/05/31")
        wrapper.vm.setEndDate("2099/12/31")
        expect(wrapper.vm.communicationForm.end_date).toEqual("2099/12/31")
        wrapper.vm.setLocations(["0","1","2","3"])
        expect(wrapper.vm.communicationForm.location_ids).toEqual(["0","1","2","3"])
        const locs=[{id:"0",name:"location1"},{id:"1",name:"location2"},{id:"2",name:"location3"}]
        const providers=[{id:"0",name:"provider1"},{id:"1",name:"provider2"},{id:"2",name:"provider3"}]
        wrapper.vm.setAllLocations(locs)
        expect(wrapper.vm.communicationForm.location_ids).toEqual(["0","1","2"])
        wrapper.vm.setProviders(providers)
        expect(wrapper.vm.communicationForm.providers[0].id).toEqual("0")
        expect(wrapper.vm.communicationForm.providers[0].name).toEqual("provider1")
        wrapper.setData({
            resourceCommunication:[{id:"0",name:"resource1",code:"000"},{id:"1",name:"resource2",code:"111"}],
            appointmentStatuses:[{id:0,name:"appointmentStatus1"},{id:1,name:"appointmentStatus2"}],
            criteria:{
                event_based:{
                    from_status:"1",
                    to_status:"0",
                    resource_communication_id:"000",
                    id:"0"
                },
            },
            communicationForm:{
                communication:{
                    repeat_checked:true
                }
            }
        })
        expect(wrapper.vm.getResourceName("0")).toEqual(undefined)
        expect(wrapper.vm.getStatusName("0")).toEqual('appointmentStatus1')
        expect(wrapper.vm.communicationForm.criteria.event_based).toEqual([])
        wrapper.vm.fetchCategories()
        wrapper.vm.fetchCommunicationData()
        wrapper.vm.fetchAppointmentTypes()
        wrapper.vm.fetchAppointmentStatuses()
        wrapper.vm.emitForm()
        expect(wrapper.emitted()["form"][0][0].start_date).toEqual("2022/05/31")
        expect(wrapper.emitted()["form"][0][0].end_date).toEqual("2099/12/31")
        expect(wrapper.vm.getDocumentExistsorNot()).toEqual(false)
        wrapper.vm.exceptionChange(false)
        expect(wrapper.vm.communicationForm.communication.exception_based_checked).toEqual(false)
        expect(wrapper.vm.criteria.time_based.exception.status).toEqual("")
        
        wrapper.vm.resetForm()
        wrapper.vm.toggleSendTo()
        expect(wrapper.vm.communicationForm.send_to).toEqual([])
        wrapper.setData({
            appointmentStatuses:[{id:"0",name:"appointmentStatus1"},{id:"1",name:"appointmentStatus2"}]
        })
        wrapper.vm.setAppointmentStatus("from")
        expect(wrapper.vm.appointmentStatusesFrom).toEqual([])
        wrapper.vm.setAppointmentStatus("to")
        expect(wrapper.vm.appointmentStatusesTo[0].id).toEqual("0")
        expect(wrapper.vm.appointmentStatusesTo[0].name).toEqual("appointmentStatus1")
        wrapper.vm.setSendTo([{id:"0",name:"sendTo"}])
        wrapper.vm.setScheduledAppointmentType(["0","1","2"])
        expect(wrapper.vm.communicationForm.appointment_type_ids).toEqual(["0","1","2"])
        wrapper.vm.setTime(101)
        expect(wrapper.vm.criteria.time_based.time_unit).toEqual(101)
        wrapper.vm.setWhen(202)
        expect(wrapper.vm.criteria.time_based.when).toEqual(202)
        wrapper.vm.setExceptionStatus(["exceptionStatus1"])
        expect(wrapper.vm.criteria.time_based.exception.status).toEqual(["exceptionStatus1"])
        wrapper.vm.setEvent(303)
        expect(wrapper.vm.criteria.time_based.event).toEqual(303)
        wrapper.vm.setRepeatTime(404)
        expect(wrapper.vm.criteria.time_based.repeat.time_unit).toEqual(404)
        wrapper.vm.setStatusFrom("0")
        expect(wrapper.vm.criteria.event_based.from_status).toEqual("0")
        wrapper.vm.setStatusTo("1")
        expect(wrapper.vm.criteria.event_based.to_status).toEqual("1")
        wrapper.vm.setResourceCommunication("")
        expect(wrapper.vm.criteria.event_based.resource_communication_id).toEqual(135)        
    })
});