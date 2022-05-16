import { shallowMount,mount } from '@vue/test-utils';
import Loader from '../../../modules/common/components/Loader';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(Loader,{
            propsData:{
                loading: false,
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
        expect(wrapper.vm.loading).toEqual(false)  
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.loading).toEqual('boolean')    
    })
});