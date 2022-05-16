import { shallowMount,mount } from '@vue/test-utils';
import ToolTipText from '../../../modules/common/components/ToolTipText';


describe('Component', () => {
    let wrapper;
    
    const newData=(name,val)=>{
        let data={ type: [String, Object], required: true }
        return data
    }
    
    beforeEach(() => {
        wrapper = mount(ToolTipText,{
            propsData: {
                text:{ availability:[newData("","0"),newData("","1"),newData("","2")] }
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
        expect(wrapper.vm.text.availability).toEqual([newData("","0"),newData("","1"),newData("","2")])
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.text).toEqual("object")
    })

});