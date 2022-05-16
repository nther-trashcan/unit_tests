import { shallowMount,mount } from '@vue/test-utils';
import PatientFilter from '../../../modules/common/components/PatientFilter';
import 'whatwg-fetch';

describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(PatientFilter,{
            propsData: {
                items: [],
                url: "" ,
                rules: [],
                itemText: "title" ,
                itemValue: "id" ,
                selectedItemText: "full_name" ,
                value: [],
                multiple: false ,
                responseKey: "" ,
                dataCypress: "calendar_patients_filter" ,
                collapsible: false ,
                selectAll: false ,
                required: false ,
                disabled: false ,
                isApiCall: true ,
                filterIds: [],
                // selectedLocation: { type: Number, default: null ,
                filterSelected: false ,
                menuMaxWidth: "auto" ,
                patientList: {} ,
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
        expect(wrapper.vm.items).toEqual([])
        expect(wrapper.vm.url).toEqual("")    
        expect(wrapper.vm.rules).toEqual([]) 
        expect(wrapper.vm.itemText).toEqual("title")
        expect(wrapper.vm.itemValue).toEqual("id")    
        expect(wrapper.vm.selectedItemText).toEqual("full_name") 
        expect(wrapper.vm.value).toEqual([])
        expect(wrapper.vm.multiple).toEqual(false)    
        expect(wrapper.vm.responseKey).toEqual("") 
        expect(wrapper.vm.dataCypress).toEqual("calendar_patients_filter")
        expect(wrapper.vm.collapsible).toEqual(false)    
        expect(wrapper.vm.selectAll).toEqual(false) 
        expect(wrapper.vm.required).toEqual(false)
        expect(wrapper.vm.disabled).toEqual(false)    
        expect(wrapper.vm.isApiCall).toEqual(true) 
        expect(wrapper.vm.filterIds).toEqual([])
        expect(wrapper.vm.filterSelected).toEqual(false)    
        expect(wrapper.vm.menuMaxWidth).toEqual("auto") 
        expect(wrapper.vm.patientList).toEqual({}) 
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.items).toEqual('object')
        expect(typeof wrapper.vm.url).toEqual('string')    
        expect(typeof wrapper.vm.rules).toEqual('object') 
        expect(typeof wrapper.vm.itemText).toEqual('string')
        expect(typeof wrapper.vm.itemValue).toEqual('string')    
        expect(typeof wrapper.vm.selectedItemText).toEqual('string') 
        expect(typeof wrapper.vm.value).toEqual('object')
        expect(typeof wrapper.vm.multiple).toEqual('boolean')    
        expect(typeof wrapper.vm.responseKey).toEqual('string') 
        expect(typeof wrapper.vm.dataCypress).toEqual('string')
        expect(typeof wrapper.vm.collapsible).toEqual('boolean')    
        expect(typeof wrapper.vm.selectAll).toEqual('boolean') 
        expect(typeof wrapper.vm.required).toEqual('boolean')
        expect(typeof wrapper.vm.disabled).toEqual('boolean')    
        expect(typeof wrapper.vm.isApiCall).toEqual('boolean') 
        expect(typeof wrapper.vm.filterIds).toEqual('object')
        expect(typeof wrapper.vm.filterSelected).toEqual('boolean')    
        expect(typeof wrapper.vm.menuMaxWidth).toEqual('string') 
        expect(typeof wrapper.vm.patientList).toEqual('object')   
    })

    it('is mocking function properly',async ()=>{
        await wrapper.vm.patientURL()
        expect(wrapper.vm.selectValue).toEqual([])
        wrapper.setData({value:[{id:"0",name:"value1"},{id:"1",name:"value2"}]})
        wrapper.vm.setPatientFilter()
        expect(wrapper.vm.selectValue).toEqual([{id:"0",name:"value1"},{id:"1",name:"value2"}])
        wrapper.setData({list:[{id:"0",name:"patient1"},{id:"1",name:"patient2"},{id:"2",name:"patient3"}]})
        wrapper.vm.emitSelectedWitPatientObject(["1"])
        expect(wrapper.emitted()["selected-patients-objects"][0][0][0].id).toEqual("1")
        expect(wrapper.emitted()["selected-patients-objects"][0][0][0].name).toEqual("patient2")
        wrapper.vm.onChange(["2"])
        expect(wrapper.emitted()["on-change"][0][0]).toEqual(["2"])
        expect(wrapper.emitted()["selected-patients-objects"][1][0][0].id).toEqual("2")
        expect(wrapper.emitted()["selected-patients-objects"][1][0][0].name).toEqual("patient3")
    })
});