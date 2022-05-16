import { shallowMount,mount } from '@vue/test-utils';
import DurationInput from '../../../modules/common/components/DurationInput';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(DurationInput,{
            propsData:{
                label: "duration",
                value: 0,
                disabled: false,
                required: false,
                dataCypress:"",
                maxLength: "",
                extra: "minutes",
                rules: [],
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
        expect(wrapper.vm.label).toEqual("duration")
        expect(wrapper.vm.value).toEqual(0)    
        expect(wrapper.vm.disabled).toEqual(false)
        expect(wrapper.vm.required).toEqual(false)    
        expect(wrapper.vm.dataCypress).toEqual("")
        expect(wrapper.vm.maxLength).toEqual("")    
        expect(wrapper.vm.extra).toEqual("minutes")
        expect(wrapper.vm.rules).toEqual([])    
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.label).toEqual('string')
        expect(typeof wrapper.vm.value).toEqual('number')    
        expect(typeof wrapper.vm.disabled).toEqual('boolean')
        expect(typeof wrapper.vm.required).toEqual('boolean')    
        expect(typeof wrapper.vm.dataCypress).toEqual('string')
        expect(typeof wrapper.vm.maxLength).toEqual('string')    
        expect(typeof wrapper.vm.extra).toEqual('string')
        expect(typeof wrapper.vm.rules).toEqual('object')     
    })

    it('is mocking function properly',()=>{
        expect(wrapper.vm.convertToMinutes("15:00")).toEqual(900)
        expect(wrapper.vm.required).toEqual(false)
        wrapper.setData({required:true})
        expect(wrapper.vm.required).toEqual(true)
        wrapper.vm.setRules()
        expect(typeof wrapper.vm.durationRules[0]).toEqual('function')
        wrapper.setData({duration:""})
        expect(wrapper.vm.duration).toEqual("")
        expect(wrapper.vm.setMinutes("16:")).toEqual("16:")
        expect(wrapper.vm.duration).toEqual("16:00")
        wrapper.vm.setMinutes("")
        expect(wrapper.emitted()["on-change"][1][0]).toEqual(960)
        expect(wrapper.emitted()["on-change"][1][1]).toEqual('minutes')
        wrapper.setData({duration:"15:00"})
        wrapper.vm.setValue()
        expect(wrapper.emitted()["on-change"][2][0]).toEqual(900)
        expect(wrapper.emitted()["on-change"][2][1]).toEqual('minutes')
        expect(wrapper.vm.duration).toEqual("")
        wrapper.setData({value:960})
        wrapper.vm.setValue()
        expect(wrapper.vm.duration).toEqual("16:00")

        


        

    })
});