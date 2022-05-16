import { shallowMount,mount } from '@vue/test-utils';
import AddEditAppointment from '../../../../modules/appointment/components/appointment/AddEditAppointment';
import 'whatwg-fetch'


describe('Component', () => {
    let wrapper;
    
    // const VueToastStub = {
    //     render: () => {},
    //     methods: {
    //         resetValidation: () => {}
    //     }
    //   }
    
    beforeEach(() => {
        wrapper = shallowMount(AddEditAppointment,{
            // localVue,
            // stubs: {
            //     VForm: VueToastStub,
            // },
        });
    });
    
    afterEach(() => {
        wrapper.destroy();
    });
    
    it('is a Vue instance', () => {   
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.isVueInstance).toBeTruthy();
    });

});