import { shallowMount,mount } from '@vue/test-utils';
import LocationDropdown from '../../../modules/common/components/LocationDropdown';
import 'whatwg-fetch';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(LocationDropdown,{
            propsData:{
                value: [{id:"0",name:"value1",data:["dataValue1","dataValue2"]},{id:"1",name:"value2",data:["dataValue1"]}],
                multiple: false,
                required: false,
                label: "Location",
                rules: [],
                itemText: "name",
                itemValue: "id",
                selectAll: false,
                dataCypress: "location",
                showLocation: ["1","2"],
                disabled: false,
                chips: true,
                collapsible: false,
                width: "100%",
                edit: false,
                name: "schedular",
                clearable: true,
                filterIds: [],
                userLocations: [],
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
        expect(wrapper.vm.value).toEqual([{id:"0",name:"value1",data:["dataValue1","dataValue2"]},{id:"1",name:"value2",data:["dataValue1"]}])
        expect(wrapper.vm.multiple).toEqual(false)    
        expect(wrapper.vm.required).toEqual(false)
        expect(wrapper.vm.label).toEqual("Location")    
        expect(wrapper.vm.rules).toEqual([])
        expect(wrapper.vm.itemText).toEqual("name")    
        expect(wrapper.vm.itemValue).toEqual("id")
        expect(wrapper.vm.selectAll).toEqual(false)    
        expect(wrapper.vm.dataCypress).toEqual("location")
        expect(wrapper.vm.showLocation).toEqual(["1","2"])    
        expect(wrapper.vm.disabled).toEqual(false)
        expect(wrapper.vm.chips).toEqual(true)    
        expect(wrapper.vm.collapsible).toEqual(false)    
        expect(wrapper.vm.width).toEqual("100%")
        expect(wrapper.vm.edit).toEqual(false)    
        expect(wrapper.vm.name).toEqual("schedular")    
        expect(wrapper.vm.clearable).toEqual(true)
        expect(wrapper.vm.filterIds).toEqual([])    
        expect(wrapper.vm.userLocations).toEqual([])    
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.value).toEqual('object')
        expect(typeof wrapper.vm.multiple).toEqual('boolean')    
        expect(typeof wrapper.vm.required).toEqual('boolean')
        expect(typeof wrapper.vm.label).toEqual('string')    
        expect(typeof wrapper.vm.rules).toEqual('object')
        expect(typeof wrapper.vm.itemText).toEqual('string')    
        expect(typeof wrapper.vm.itemValue).toEqual('string')
        expect(typeof wrapper.vm.selectAll).toEqual('boolean')    
        expect(typeof wrapper.vm.dataCypress).toEqual('string')
        expect(typeof wrapper.vm.showLocation).toEqual('object')    
        expect(typeof wrapper.vm.disabled).toEqual('boolean')
        expect(typeof wrapper.vm.chips).toEqual('boolean')    
        expect(typeof wrapper.vm.collapsible).toEqual('boolean')    
        expect(typeof wrapper.vm.width).toEqual('string')
        expect(typeof wrapper.vm.edit).toEqual('boolean')    
        expect(typeof wrapper.vm.name).toEqual('string')    
        expect(typeof wrapper.vm.clearable).toEqual('boolean')
        expect(typeof wrapper.vm.filterIds).toEqual('object')    
        expect(typeof wrapper.vm.userLocations).toEqual('object')    
    })

    it('is mocking function properly',async ()=>{
        await wrapper.vm.setLocationList()
        wrapper.vm.setArray({id:"0",name:"value",data:["value1","value2"]})
        expect(wrapper.emitted()["on-change"][0][0].id).toEqual("0")
        expect(wrapper.emitted()["on-change"][0][0].name).toEqual("value")
        expect(wrapper.emitted()["on-change"][0][0].data).toEqual(["value1","value2"])
        expect(wrapper.vm.list).toEqual([])
        wrapper.setData({list:[{id:"0",name:"location1"},{id:"1",name:"location2"},{id:"2",name:"location3"}]})
        expect(wrapper.vm.list).toEqual([{id:"0",name:"location1"},{id:"1",name:"location2"},{id:"2",name:"location3"}])
        expect(wrapper.vm.displayList()[0].id).toEqual("1")
        expect(wrapper.vm.displayList()[0].name).toEqual("location2")

        
    })
});