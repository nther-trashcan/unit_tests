import { shallowMount,mount } from '@vue/test-utils';
import TimePicker from '../../../modules/common/components/TimePicker';


describe('Component', () => {
    let wrapper;

    const VueToastStub = {
        render: () => {},
        methods: {
            resetValidation: () => {},
            validate:()=>{}
        }
      }
    
    beforeEach(() => {
        wrapper = shallowMount(TimePicker,{
            propsData:{
                label: "",
                placeholder: "HH:mm",
                rules: [],
                value: "",
                extra: "",
                required: false,
                dataCypress: "time",
                disabled: false,
            },
            stubs: {
                VTextField: VueToastStub,
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
        expect(wrapper.vm.label).toEqual("")
        expect(wrapper.vm.placeholder).toEqual("HH:mm")    
        expect(wrapper.vm.rules).toEqual([])
        expect(wrapper.vm.value).toEqual("")    
        expect(wrapper.vm.extra).toEqual("")
        expect(wrapper.vm.required).toEqual(false)    
        expect(wrapper.vm.dataCypress).toEqual("time")
        expect(wrapper.vm.disabled).toEqual(false)    
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.label).toEqual("string")
        expect(typeof wrapper.vm.placeholder).toEqual("string")
        expect(typeof wrapper.vm.rules).toEqual("object")
        expect(typeof wrapper.vm.value).toEqual("string")
        expect(typeof wrapper.vm.extra).toEqual("string")
        expect(typeof wrapper.vm.required).toEqual("boolean")
        expect(typeof wrapper.vm.dataCypress).toEqual("string")
        expect(typeof wrapper.vm.disabled).toEqual("boolean")
    })

    it('is mocking function properly',()=>{
        wrapper.vm.clearValidation()
        expect(wrapper.vm.period).toEqual("")
        wrapper.vm.setPeriod("PM")
        expect(wrapper.vm.period).toEqual("PM")
        expect(wrapper.vm.selectedValue).toEqual(": PM")
        expect(wrapper.vm.hour).toEqual("")
        expect(wrapper.vm.minute).toEqual("")
        wrapper.vm.setHour("03")
        expect(wrapper.vm.hour).toEqual("03")
        expect(wrapper.vm.selectedValue).toEqual("03:00 PM")
        expect(wrapper.vm.minute).toEqual("00")
        wrapper.vm.setMinute("30")
        expect(wrapper.vm.minute).toEqual("30")
        expect(wrapper.vm.selectedValue).toEqual("03:30 PM")
        wrapper.vm.open()
        expect(wrapper.vm.display).toEqual("block")
        wrapper.vm.close()
        expect(wrapper.vm.display).toEqual("none")
        wrapper.vm.toggle()
        expect(wrapper.vm.display).toEqual("block")
        expect(wrapper.vm.convertTimeTo24Hours("03:00 PM")).toEqual("15:00")
        expect(wrapper.vm.formatTime("15:00")).toEqual("03:00 PM")
        
    })
});