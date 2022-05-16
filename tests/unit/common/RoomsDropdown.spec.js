import { shallowMount,mount } from '@vue/test-utils';
import RoomsDropdown from '../../../modules/common/components/RoomsDropdown';
import 'whatwg-fetch'

describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(RoomsDropdown,{
            propsData: {
                items:[] ,
                url: "" ,
                rules:[] ,
                itemText: "name" ,
                itemValue: "id" ,
                chips: false ,
                selectedItemText: "full_name" ,
                value: ["value1","value2","value3"],
                multiple: false ,
                responseKey: "" ,
                dataCypress: "rooms_dropdown" ,
                collapsible: false ,
                selectAll: false ,
                required: false ,
                disabled: false ,
                isApiCall: true ,
                roomList: {},
                filterIds:[] ,
                selectedLocation:"",
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
        expect(wrapper.vm.items).toEqual([]) 
        expect(wrapper.vm.url).toEqual("") 
        expect(wrapper.vm.rules).toEqual([]) 
        expect(wrapper.vm.itemText).toEqual("name") 
        expect(wrapper.vm.itemValue).toEqual("id") 
        expect(wrapper.vm.chips).toEqual(false) 
        expect(wrapper.vm.selectedItemText).toEqual("full_name") 
        expect(wrapper.vm.value).toEqual(["value1","value2","value3"]) 
        expect(wrapper.vm.multiple).toEqual(false) 
        expect(wrapper.vm.responseKey).toEqual("") 
        expect(wrapper.vm.dataCypress).toEqual("rooms_dropdown") 
        expect(wrapper.vm.collapsible).toEqual(false) 
        expect(wrapper.vm.selectAll).toEqual(false) 
        expect(wrapper.vm.required).toEqual(false) 
        expect(wrapper.vm.disabled).toEqual(false) 
        expect(wrapper.vm.isApiCall).toEqual(true) 
        expect(wrapper.vm.roomList).toEqual({}) 
        expect(wrapper.vm.filterIds).toEqual([]) 
        expect(wrapper.vm.selectedLocation).toEqual("") 


    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.items).toEqual('object') 
        expect(typeof wrapper.vm.url).toEqual('string') 
        expect(typeof wrapper.vm.rules).toEqual('object') 
        expect(typeof wrapper.vm.itemText).toEqual('string') 
        expect(typeof wrapper.vm.itemValue).toEqual('string') 
        expect(typeof wrapper.vm.chips).toEqual('boolean') 
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
        expect(typeof wrapper.vm.roomList).toEqual('object') 
        expect(typeof wrapper.vm.filterIds).toEqual('object') 
        expect(typeof wrapper.vm.selectedLocation).toEqual('string') 

    })

    it('is mocking function properly',async ()=>{
        const value=["value1","value2","value3"]
        wrapper.vm.onChange(value)
        expect(wrapper.emitted()["on-change"][0][0]).toEqual(value)
        await wrapper.vm.getRooms()
        await wrapper.vm.locationBasedRoomURL()        
    })
});