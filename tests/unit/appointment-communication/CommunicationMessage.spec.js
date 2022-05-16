import { shallowMount,mount } from '@vue/test-utils';
import CommunicationMessage from '../../../modules/appointment-communication/components/CommunicationMessage';


describe('Component', () => {
    let wrapper;
    const VueStubForm={
        render:()=>{},
        methods:{
            reset:()=>{}
        }
    }
    
    beforeEach(() => {
        wrapper = shallowMount(CommunicationMessage,{
            propsData: {
                communicationMessage: {
                    communication_channels: [],
                    preferred_communication: false,
                    email: false,
                    text: false,
                },
                reset: false,
                communicationId: "" ,
                copyCommunication: false,
              },
            stubs:{
                VForm:VueStubForm
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
        expect(wrapper.vm.communicationMessage.communication_channels).toEqual([])
        expect(wrapper.vm.communicationMessage.preferred_communication).toEqual(false)
        expect(wrapper.vm.communicationMessage.email).toEqual(false)
        expect(wrapper.vm.communicationMessage.text).toEqual(false)
        expect(wrapper.vm.reset).toEqual(false)    
        expect(wrapper.vm.communicationId).toEqual("")
        expect(wrapper.vm.copyCommunication).toEqual(false)       
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.communicationMessage.communication_channels).toEqual('object')
        expect(typeof wrapper.vm.communicationMessage.preferred_communication).toEqual('boolean')
        expect(typeof wrapper.vm.communicationMessage.email).toEqual('boolean')
        expect(typeof wrapper.vm.communicationMessage.text).toEqual('boolean')
        expect(typeof wrapper.vm.reset).toEqual('boolean')    
        expect(typeof wrapper.vm.communicationId).toEqual('string')
        expect(typeof wrapper.vm.copyCommunication).toEqual('boolean')   
    })

    it('is mocking function properly',async ()=>{
        wrapper.setData({
            communicationMessage:{
                communication_channels: []
            },
            communication:{
                communication_channels: {
                    body:
                      "Hi {{recipient.firstName}} {{recipient.preferredName}} {{recipient.lastName | first}}, This is a confirmation of your appointment with us at {{recipient.appointmentTime}}. To view details of your appointment, please log in at {{portalURL}}.",
          
                    subject: "Appointment Confirmation",
                    bodyEmail: `<p>Hi {{recipient.firstName}} {{recipient.preferredName}} {{recipient.lastName | first}},</p><p>
          This is a confirmation of your appointment with us. To view details of your appointment, please log in at {{portalURL}}.</p><p>
          Date &amp; Time : {{recipient.appointmentDate}} at {{recipient.appointmentTime}}</p><p>
          Regards.</p><p>
          {{recipient.telehealthBox}}</p>`,
                    telehealthMessage:
                      "This is a telehealth Appointment. Please click {{recipient.joiningUrl}} to join the meeting.",
                    check: true,
                  }
            }
        })
        expect(wrapper.vm.telehealthCounter).toEqual(0)
        wrapper.vm.setTelehealthCounter()
        expect(wrapper.vm.telehealthCounter).toEqual(1)
        expect(wrapper.vm.emailCounter).toEqual(0)
        wrapper.vm.setEmailCounter()
        expect(wrapper.vm.emailCounter).toEqual(1)
        expect(wrapper.vm.textCounter).toEqual(0)
        wrapper.vm.setTextCounter()
        expect(wrapper.vm.textCounter).toEqual(1)
        wrapper.vm.changeBodySMS()
        wrapper.vm.changeBodyEmail()
        wrapper.vm.changeTelehealthMessage()
        wrapper.vm.changeSubject()
        expect(wrapper.vm.communicationMessage.email).toEqual(false)
        wrapper.vm.emailChecked(true)
        expect(wrapper.vm.communicationMessage.email).toEqual(true)
        expect(wrapper.vm.communicationMessage.communication_channels[0].type_id).toEqual(119)
        wrapper.setData({
            communication:{
                text:true
            },
            communicationMessage:{
                communication_channels: []
            },
        })
        expect(wrapper.vm.communicationMessage.text).toEqual(false)
        wrapper.vm.textChecked(true)
        expect(wrapper.vm.communicationMessage.text).toEqual(true)
        console.log(wrapper.vm.communicationMessage.communication_channels)
        expect(wrapper.vm.communicationMessage.communication_channels[0].type_id).toEqual(118)
        expect(wrapper.vm.communicationMessage.preferred_communication).toEqual(false)
        wrapper.vm.communicationChecked(true)
        expect(wrapper.vm.communicationMessage.preferred_communication).toEqual(true)
        wrapper.setData({
            communication:{
                text:false,
                email:false,
                preferedCommunication:false,
            },
            communicationMessage:{
                communication_channels: {
                    body:
                      "Hi {{recipient.firstName}} {{recipient.preferredName}} {{recipient.lastName | first}}, This is a confirmation of your appointment with us at {{recipient.appointmentTime}}. To view details of your appointment, please log in at {{portalURL}}.",
          
                    subject: "Appointment Confirmation",
                    bodyEmail: `<p>Hi {{recipient.firstName}} {{recipient.preferredName}} {{recipient.lastName | first}},</p><p>
          This is a confirmation of your appointment with us. To view details of your appointment, please log in at {{portalURL}}.</p><p>
          Date &amp; Time : {{recipient.appointmentDate}} at {{recipient.appointmentTime}}</p><p>
          Regards.</p><p>
          {{recipient.telehealthBox}}</p>`,
                    telehealthMessage:
                      "This is a telehealth Appointment. Please click {{recipient.joiningUrl}} to join the meeting.",
                    check: true,
                  }
            }
        })
        wrapper.vm.emitForm()
        expect(wrapper.emitted()["form"][3][0]).toEqual([])
        wrapper.setData({
            communication:{
                preferedCommunication:true,
            },
            communicationMessage:{
                communication_channels: [{
                    body:
                      "Hi {{recipient.firstName}} {{recipient.preferredName}} {{recipient.lastName | first}}, This is a confirmation of your appointment with us at {{recipient.appointmentTime}}. To view details of your appointment, please log in at {{portalURL}}.",
          
                    subject: "Appointment Confirmation",
                    bodyEmail: `<p>Hi {{recipient.firstName}} {{recipient.preferredName}} {{recipient.lastName | first}},</p><p>
          This is a confirmation of your appointment with us. To view details of your appointment, please log in at {{portalURL}}.</p><p>
          Date &amp; Time : {{recipient.appointmentDate}} at {{recipient.appointmentTime}}</p><p>
          Regards.</p><p>
          {{recipient.telehealthBox}}</p>`,
                    telehealthMessage:
                      "This is a telehealth Appointment. Please click {{recipient.joiningUrl}} to join the meeting.",
                    check: true,
                  }]
            }
        })
        wrapper.vm.emitForm()
        expect(wrapper.emitted()["form"][7][0][0].subject).toEqual("Appointment Confirmation")
        expect(wrapper.emitted()["form"][7][0][0].check).toEqual(true)
        wrapper.vm.resetForm()
        wrapper.vm.fetchCommunicationData()
        wrapper.vm.setEmailContent("<!DOCTYPE html>")
        expect(wrapper.vm.communication.communication_channels.bodyEmail).toEqual("<!DOCTYPE html>")

        
    })
});