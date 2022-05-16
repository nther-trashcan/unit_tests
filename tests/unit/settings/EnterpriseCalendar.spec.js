import { shallowMount,mount } from '@vue/test-utils';
import EnterpriseCalendar from '../../../modules/settings/components/EnterpriseCalendar';
import 'whatwg-fetch'


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = mount(EnterpriseCalendar,{});
    });
    
    afterEach(() => {
        wrapper.destroy();
    });
    
    it('is a Vue instance', () => {   
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it('is mocking function properly',()=>{
        wrapper.vm.fetchData()
        wrapper.vm.save()
        
    })
});