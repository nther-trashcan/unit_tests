import { shallowMount,mount } from '@vue/test-utils';
import Waitlist from '../../../modules/global-setting/components/Waitlist';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(Waitlist,{
            propsData: {
                waitList: {},
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
        expect(wrapper.vm.waitList).toEqual({})
        expect(wrapper.vm.isEdit).toEqual(false)     
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.waitList).toEqual("object")
        expect(typeof wrapper.vm.isEdit).toEqual("boolean")
    })

    it('is mocking function properly',()=>{
        wrapper.vm.emit()
        expect(wrapper.emitted()["wait-list"][0][0].enable_waitlist).toEqual(true)
        expect(wrapper.emitted()["wait-list"][0][0].no_of_waitlist_allowed).toEqual("5")
        expect(wrapper.emitted()["wait-list"][0][0].view_past_waitlist).toEqual(false)
        wrapper.vm.setWaitlistAllowed("6")
        wrapper.vm.emit()
        expect(wrapper.emitted()["wait-list"][1][0].no_of_waitlist_allowed).toEqual("6")
    })
});