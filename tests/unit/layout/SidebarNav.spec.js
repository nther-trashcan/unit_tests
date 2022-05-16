import { shallowMount,mount } from '@vue/test-utils';
import SidebarNav from '../../../modules/layout/components/SidebarNav';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(SidebarNav,{});
    });
    
    afterEach(() => {
        wrapper.destroy();
    });
    
    it('is a Vue instance', () => {   
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it('is mocking function properly',()=>{
        expect(wrapper.vm.collapsed).toEqual(true)
        wrapper.vm.collapse()
        expect(wrapper.emitted()["sidebar-open-close"][0][0]).toEqual(false)
        expect(wrapper.vm.collapsed).toEqual(false)
        wrapper.vm.onItemClick(Event,{id:"0",title:"title",href:"href",isMenu:true})
        expect(wrapper.emitted()['add-tabs-event'][0][0].name).toEqual("title")
        expect(wrapper.emitted()['add-tabs-event'][0][0].title).toEqual("title")
        expect(wrapper.emitted()['add-tabs-event'][0][0].id).toEqual("0")
        expect(wrapper.emitted()['add-tabs-event'][0][0].isActive).toEqual(true)
        expect(wrapper.emitted()['add-tabs-event'][0][0].href).toEqual("href")
        expect(wrapper.emitted()['add-tabs-event'][0][0].isOpen).toEqual(false)    
    })
});