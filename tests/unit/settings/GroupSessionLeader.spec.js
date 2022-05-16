import { shallowMount,mount } from '@vue/test-utils';
import GroupSessionLeader from '../../../modules/settings/components/GroupSessionLeader';
import moment from "moment";
import 'whatwg-fetch'


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = mount(GroupSessionLeader,{
            propsData: {
                occuranceId: 0,
                occuranceDate: moment().format("YYYY-MM-DD"),
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
        expect(wrapper.vm.occuranceId).toEqual(0)
        expect(wrapper.vm.occuranceDate).toEqual(moment().format("YYYY-MM-DD"))        
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.occuranceId).toEqual('number')
        expect(typeof wrapper.vm.occuranceDate).toEqual('string')
    })

});