import { shallowMount,mount } from '@vue/test-utils';
import AppointmentTypesDropdown from '../../../modules/appointment/components/AppointmentTypesDropdown';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(AppointmentTypesDropdown,{});
    });
    
    afterEach(() => {
        wrapper.destroy();
    });
    
    it('is a Vue instance', () => {   
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.isVueInstance).toBeTruthy();
    });
});