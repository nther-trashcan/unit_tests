import { shallowMount,mount } from '@vue/test-utils';
import DateTimePicker from '../../../modules/common/components/DateTimePicker';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(DateTimePicker,{
            propsData: {
                label: "Datetime" ,
                value: "" ,
                rules: [] ,
                min: "" ,
                max: "" ,
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
        expect(wrapper.vm.label).toEqual("Datetime")
        expect(wrapper.vm.value).toEqual("")    
        expect(wrapper.vm.rules).toEqual([])
        expect(wrapper.vm.min).toEqual("")    
        expect(wrapper.vm.max).toEqual("")
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.label).toEqual('string')
        expect(typeof wrapper.vm.value).toEqual('string')
        expect(typeof wrapper.vm.rules).toEqual('object')    
        expect(typeof wrapper.vm.min).toEqual('string')
        expect(typeof wrapper.vm.max).toEqual('string')  
    })

    it('is mocking function properly',()=>{
        wrapper.setData({date:"05/12/2022",time:"15:00"})
        wrapper.vm.setDateTime()
        expect(wrapper.vm.selectedValue).toEqual("05/12/2022 15:00")
        wrapper.setData({value:"05/15/2022 06:00"})
        wrapper.vm.setValues()
        expect(wrapper.vm.selectedValue).toEqual("05/15/2022 06:00")
        expect(wrapper.vm.date).toEqual("05/15/2022")
        expect(wrapper.vm.time).toEqual("06:00")

    })
});