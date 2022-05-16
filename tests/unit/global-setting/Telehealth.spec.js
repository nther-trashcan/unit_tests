import { shallowMount,mount } from '@vue/test-utils';
import Telehealth from '../../../modules/global-setting/components/Telehealth';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(Telehealth,{
            propsData: {
                telehealth: {},
                isEdit: false,
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
        expect(wrapper.vm.telehealth).toEqual({})
        expect(wrapper.vm.isEdit).toEqual(false)       
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.telehealth).toEqual("object")
        expect(typeof wrapper.vm.isEdit).toEqual("boolean")
    })

    it('is mocking function properly',()=>{
        wrapper.vm.emit()
        expect(wrapper.emitted()["tele-health"][0][0]).toEqual("5")
        wrapper.vm.setDurationOnChange("6")
        wrapper.vm.emit()
        expect(wrapper.emitted()["tele-health"][1][0]).toEqual("6")
        
    })
});