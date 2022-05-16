import { shallowMount,mount } from '@vue/test-utils';
import ColorPickerCalender from '../../../modules/common/components/ColorPickerCalender';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(ColorPickerCalender,{
            propsData:{
                color:"color",
                label:""
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
        expect(wrapper.vm.color).toEqual("color")
        expect(wrapper.vm.label).toEqual("")    
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.color).toEqual('string')
        expect(typeof wrapper.vm.label).toEqual('string')    
    })

    it('is mocking function properly',()=>{
        expect(wrapper.vm.toggle).toEqual(false)
        wrapper.vm.colorPickerToggleShow()
        expect(wrapper.vm.toggle).toEqual(true)
        wrapper.vm.colorPickerToggleHide()
        expect(wrapper.vm.toggle).toEqual(false)
        
    })
});