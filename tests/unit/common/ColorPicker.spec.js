import { shallowMount,mount } from '@vue/test-utils';
import ColorPicker from '../../../modules/common/components/ColorPicker';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(ColorPicker,{
            propsData:{
                value: "",
                required: true,
                label: "",
                dataCypress: "",
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
        expect(wrapper.vm.value).toEqual("")
        expect(wrapper.vm.required).toEqual(true)    
        expect(wrapper.vm.label).toEqual("")
        expect(wrapper.vm.dataCypress).toEqual("")    
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.value).toEqual('string')
        expect(typeof wrapper.vm.required).toEqual('boolean')
        expect(typeof wrapper.vm.label).toEqual('string') 
        expect(typeof wrapper.vm.dataCypress).toEqual('string')     
    })

    it('is mocking function properly',()=>{
        wrapper.vm.setRules()
        expect(wrapper.vm.toggle).toEqual(false)
        wrapper.vm.colorPickerToggleShow()
        expect(wrapper.vm.toggle).toEqual(true)
        wrapper.vm.colorPickerToggleHide()
        expect(wrapper.vm.toggle).toEqual(false)
        expect(typeof wrapper.vm.rules[0]).toEqual('function')
        
    })
});