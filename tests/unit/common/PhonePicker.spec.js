import { shallowMount,mount } from '@vue/test-utils';
import PhonePicker from '../../../modules/common/components/PhonePicker';


describe('Component', () => {
    let wrapper;

    const VueToastStub = {
        render: () => {},
        methods: {
            resetValidation: () => {},
            validate: () => {},
            reset:()=>{}
        }
      }
    
    beforeEach(() => {
        wrapper = shallowMount(PhonePicker,{
            propsData:{
                value: "",
                idPicker: "phonePicker" ,
                placeholder: "" ,
                required: false ,
                label: "" ,
                min: "" ,
                showCurrent: "" ,
                max: "" ,
                disabled: false ,
                dataCypress: "" ,
                rules: [] ,
                index: -1 ,
                readonly: false ,
                menuCssClass: "" ,
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
        expect(wrapper.vm.value).toEqual("")   
        expect(wrapper.vm.idPicker).toEqual("phonePicker")   
        expect(wrapper.vm.placeholder).toEqual("")   
        expect(wrapper.vm.required).toEqual(false)   
        expect(wrapper.vm.label).toEqual("")   
        expect(wrapper.vm.min).toEqual("")   
        expect(wrapper.vm.showCurrent).toEqual("")   
        expect(wrapper.vm.max).toEqual("")   
        expect(wrapper.vm.disabled).toEqual(false)   
        expect(wrapper.vm.dataCypress).toEqual("")   
        expect(wrapper.vm.rules).toEqual([])   
        expect(wrapper.vm.index).toEqual(-1)   
        expect(wrapper.vm.readonly).toEqual(false)   
        expect(wrapper.vm.menuCssClass).toEqual("")   
        
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.value).toEqual('string')   
        expect(typeof wrapper.vm.idPicker).toEqual('string')   
        expect(typeof wrapper.vm.placeholder).toEqual('string')   
        expect(typeof wrapper.vm.required).toEqual('boolean')   
        expect(typeof wrapper.vm.label).toEqual('string')   
        expect(typeof wrapper.vm.min).toEqual('string')   
        expect(typeof wrapper.vm.showCurrent).toEqual('string')   
        expect(typeof wrapper.vm.max).toEqual('string')   
        expect(typeof wrapper.vm.disabled).toEqual('boolean')   
        expect(typeof wrapper.vm.dataCypress).toEqual('string')   
        expect(typeof wrapper.vm.rules).toEqual('object')   
        expect(typeof wrapper.vm.index).toEqual('number')   
        expect(typeof wrapper.vm.readonly).toEqual('boolean')   
        expect(typeof wrapper.vm.menuCssClass).toEqual('string')  
    })

    it('is mocking function properly',()=>{
        
        expect(wrapper.vm.selectedValue).toEqual(undefined)
        wrapper.vm.setSelectedValue("9988XXXXXX")
        expect(wrapper.vm.selectedValue).toEqual("9988XXXXXX")
        expect(wrapper.vm.parseDate("")).toEqual(null)
        expect(wrapper.vm.parseDate("05/12/2022")).toEqual("2022-05-12")
        expect(wrapper.vm.required).toEqual(false)
        expect(wrapper.vm.defaultRules).toEqual([])
        wrapper.setData({required:true,countryDialCode:"91"})
        expect(wrapper.vm.required).toEqual(true)
        wrapper.vm.setRequired()
        expect(typeof wrapper.vm.defaultRules[0]).toEqual('function')
        wrapper.vm.emitForm()
        expect(wrapper.emitted()["on-change"][1][0]).toEqual("+91 9988XXXXXX")
        wrapper.setData({value:" 9987XXXXXX",defaultRules:[],rules:[{id:"0",name:"rule1"},{id:"1",name:"rule2"}]})
        expect(wrapper.vm.defaultRules).toEqual([])
        wrapper.vm.setRulesFromOutside()
        expect(wrapper.vm.defaultRules[0].name).toEqual("rule1")
        wrapper.vm.setValues()
        expect(wrapper.vm.selectedValue).toEqual("9987XXXXXX")
        
        



    })
});