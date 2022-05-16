import { shallowMount,mount } from '@vue/test-utils';
import Snackbar from '../../../modules/common/components/Snackbar';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(Snackbar,{
            propsData: {
                open: false,
                message: "",
                type: "success",
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
        expect(wrapper.vm.open).toEqual(false)
        expect(wrapper.vm.message).toEqual("")    
        expect(wrapper.vm.type).toEqual("success")    
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.open).toEqual('boolean')
        expect(typeof wrapper.vm.message).toEqual('string')    
        expect(typeof wrapper.vm.type).toEqual('string')
    })

});