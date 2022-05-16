import { shallowMount,mount } from '@vue/test-utils';
import Header from '../../../modules/layout/components/Header';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = mount(Header,{
            propsData:{
                headerTitle:""
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
        expect(wrapper.vm.headerTitle).toEqual("")
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.headerTitle).toEqual('string')
    })

    it('is mocking function properly',()=>{
        wrapper.vm.alert()
        wrapper.vm.logout()
    })
});