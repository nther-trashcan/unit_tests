import { shallowMount,mount } from '@vue/test-utils';
import CommunicationViewAppointment from '../../../../modules/appointment/components/appointment/CommunicationViewAppointment';
import 'whatwg-fetch'


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(CommunicationViewAppointment,{
            propsData: {
                appointmentId: 0,
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
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.appointmentId).toEqual('number')   
    })

    it('is mocking function properly',()=>{
        wrapper.vm.resendCommunication("0")
        wrapper.vm.getCommunication()
        expect(wrapper.vm.getColor("Success")["background-color"]).toEqual("#dcedc8")
        expect(wrapper.vm.getColor("Pending")["background-color"]).toEqual("#ffebc4")
        expect(wrapper.vm.getColor("Waiting")["background-color"]).toEqual("#ffcdd2")
        wrapper.vm.resendCommunicationButton("0")

    })
});