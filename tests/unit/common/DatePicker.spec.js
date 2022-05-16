import { shallowMount,mount } from '@vue/test-utils';
import DatePicker from '../../../modules/common/components/DatePicker';
import vuetify from "vuetify"
import Vue from 'vue';


describe('Component', () => {
    let wrapper;
    
    

    beforeEach(() => {
        wrapper = mount(DatePicker,{
            propsData:{
                value:  "" ,
                required: true ,
                label:  "" ,
                min:  "" ,
                showCurrent:  "" ,
                max:  "" ,
                disabled: false ,
                dataCypress:  "" ,
                rules: [] ,
                index: -1 ,
                readonly: false ,
                endDateEditable: false ,
                appointmentDateRules: false ,
                templateDateRules: false ,
                menuCssClass:  "" ,
                errorMsgForEndDate: true ,
                scrollwindow: false ,
                validateDate: false ,
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
        expect(wrapper.vm.value).toEqual("")
        expect(wrapper.vm.required).toEqual(true)    
        expect(wrapper.vm.label).toEqual("")
        expect(wrapper.vm.min).toEqual("")    
        expect(wrapper.vm.showCurrent).toEqual("")
        expect(wrapper.vm.max).toEqual("")    
        expect(wrapper.vm.disabled).toEqual(false)
        expect(wrapper.vm.dataCypress).toEqual("")    
        expect(wrapper.vm.rules).toEqual([])
        expect(wrapper.vm.index).toEqual(-1)    
        expect(wrapper.vm.readonly).toEqual(false)
        expect(wrapper.vm.endDateEditable).toEqual(false)    
        expect(wrapper.vm.appointmentDateRules).toEqual(false)    
        expect(wrapper.vm.templateDateRules).toEqual(false)
        expect(wrapper.vm.menuCssClass).toEqual("")    
        expect(wrapper.vm.errorMsgForEndDate).toEqual(true)
        expect(wrapper.vm.scrollwindow).toEqual(false)    
        expect(wrapper.vm.validateDate).toEqual(false)
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.value).toEqual('string')
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
        expect(typeof wrapper.vm.endDateEditable).toEqual('boolean')    
        expect(typeof wrapper.vm.appointmentDateRules).toEqual('boolean')    
        expect(typeof wrapper.vm.templateDateRules).toEqual('boolean')
        expect(typeof wrapper.vm.menuCssClass).toEqual('string')    
        expect(typeof wrapper.vm.errorMsgForEndDate).toEqual('boolean')
        expect(typeof wrapper.vm.scrollwindow).toEqual('boolean')    
        expect(typeof wrapper.vm.validateDate).toEqual('boolean')  
    })

    it('is mocking function properly',()=>{
        expect(wrapper.vm.selectedValue).toEqual("")
        wrapper.vm.setSelectedValue("2022/05/11")
        wrapper.vm.emitForm()
        expect(wrapper.emitted()["on-change"][0][0]).toEqual("2022/05/11")
        expect(wrapper.emitted()["on-change"][0][1]).toEqual("05/11/2022")
        expect(wrapper.emitted()["on-change"][0][2]).toEqual(-1)
        wrapper.vm.textFieldClickEvent(true)
        expect(wrapper.vm.errorOutsideClick).toEqual(false)
        wrapper.vm.dateValue()
        expect(wrapper.emitted().dateValue[0][0]).toEqual("05/11/2022")
        expect(wrapper.vm.errorOutsideClick).toEqual(true)
        wrapper.vm.setValues()
        wrapper.vm.emitForm()
        expect(wrapper.emitted()["on-change"][0][0]).toEqual("2022/05/11")
        expect(wrapper.emitted()["on-change"][0][1]).toEqual("05/11/2022")
        expect(wrapper.emitted()["on-change"][0][2]).toEqual(-1)
        expect(wrapper.vm.parseDate("05/11/2022")).toEqual("2022-05-11")
        expect(wrapper.vm.required).toEqual(true)
        wrapper.vm.setRequired()
        expect(typeof wrapper.vm.defaultRules[0]).toEqual('function')        
        wrapper.setData({required:false})
        expect(wrapper.vm.required).toEqual(false)
        wrapper.vm.setRulesFromOutside()
        expect(wrapper.vm.defaultRules).toEqual([])
        wrapper.setData({required:true})
        expect(wrapper.vm.required).toEqual(true)
        wrapper.vm.formatRules()
        expect(typeof wrapper.vm.defaultRules[0]).toEqual('function')

    })
});