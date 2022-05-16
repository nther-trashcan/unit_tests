import { shallowMount,mount } from '@vue/test-utils';
import Error from '../../../modules/common/components/Error';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(Error,{
            propsData:{
                message: "",
                warningMessage: "",
                session: false,
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
        expect(wrapper.vm.message).toEqual("")    
        expect(wrapper.vm.warningMessage).toEqual("")
        expect(wrapper.vm.session).toEqual(false)
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.message).toEqual('string')
        expect(typeof wrapper.vm.warningMessage).toEqual('string')
        expect(typeof wrapper.vm.session).toEqual('boolean')    
    })

});