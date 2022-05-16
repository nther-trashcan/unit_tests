import { shallowMount,mount } from '@vue/test-utils';
import ResourceFilter from '../../../modules/common/components/ResourceFilter';
import 'whatwg-fetch'


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(ResourceFilter,{
            propsData: {
                label: "Resource" ,
                items: [] ,
                rules: [] ,
                itemText: "name" ,
                itemValue: "id" ,
                value: [],
                multiple: false ,
                responseKey: "" ,
                dataCypress: "resource" ,
                selectAll: false ,
                collapsible: false ,
                required: false ,
                provider: true ,
                other: true ,
                rooms: true ,
                room: true ,
                allProvider: false ,
                isSetting: false ,
                disabled: false ,
                filterIds: [] ,
                userLocations: [] ,
                isApiCall: true ,
                resourceList: {} ,
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
        expect(wrapper.vm.label).toEqual("Resource")
        expect(wrapper.vm.items).toEqual([])
        expect(wrapper.vm.rules).toEqual([])
        expect(wrapper.vm.itemText).toEqual("name")
        expect(wrapper.vm.itemValue).toEqual("id")
        expect(wrapper.vm.value).toEqual([])
        expect(wrapper.vm.multiple).toEqual(false)
        expect(wrapper.vm.responseKey).toEqual("")
        expect(wrapper.vm.dataCypress).toEqual("resource")
        expect(wrapper.vm.selectAll).toEqual(false)
        expect(wrapper.vm.collapsible).toEqual(false)
        expect(wrapper.vm.required).toEqual(false)
        expect(wrapper.vm.provider).toEqual(true)
        expect(wrapper.vm.other).toEqual(true)
        expect(wrapper.vm.rooms).toEqual(true)
        expect(wrapper.vm.room).toEqual(true)
        expect(wrapper.vm.allProvider).toEqual(false)
        expect(wrapper.vm.isSetting).toEqual(false)
        expect(wrapper.vm.disabled).toEqual(false)
        expect(wrapper.vm.filterIds).toEqual([])
        expect(wrapper.vm.userLocations).toEqual([])
        expect(wrapper.vm.isApiCall).toEqual(true)
        expect(wrapper.vm.resourceList).toEqual({})

    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.label).toEqual('string')
        expect(typeof wrapper.vm.items).toEqual('object')
        expect(typeof wrapper.vm.rules).toEqual('object')
        expect(typeof wrapper.vm.itemText).toEqual('string')
        expect(typeof wrapper.vm.itemValue).toEqual('string')
        expect(typeof wrapper.vm.value).toEqual('object')
        expect(typeof wrapper.vm.multiple).toEqual('boolean')
        expect(typeof wrapper.vm.responseKey).toEqual('string')
        expect(typeof wrapper.vm.dataCypress).toEqual('string')
        expect(typeof wrapper.vm.selectAll).toEqual('boolean')
        expect(typeof wrapper.vm.collapsible).toEqual('boolean')
        expect(typeof wrapper.vm.required).toEqual('boolean')
        expect(typeof wrapper.vm.provider).toEqual('boolean')
        expect(typeof wrapper.vm.other).toEqual('boolean')
        expect(typeof wrapper.vm.rooms).toEqual('boolean')
        expect(typeof wrapper.vm.room).toEqual('boolean')
        expect(typeof wrapper.vm.allProvider).toEqual('boolean')
        expect(typeof wrapper.vm.isSetting).toEqual('boolean')
        expect(typeof wrapper.vm.disabled).toEqual('boolean')
        expect(typeof wrapper.vm.filterIds).toEqual('object')
        expect(typeof wrapper.vm.userLocations).toEqual('object')
        expect(typeof wrapper.vm.isApiCall).toEqual('boolean')
        expect(typeof wrapper.vm.resourceList).toEqual('object')

    })

    it('is mocking function properly',async ()=>{
        await wrapper.vm.fetchResource()
        await wrapper.vm.resetList()
        wrapper.vm.onChange([{id:"0",name:"value1",data:["dataValue1","dataValue2"]}])
        expect(wrapper.emitted()["on-change"][0][0][0].id).toEqual("0")
        expect(wrapper.emitted()["on-change"][0][0][0].name).toEqual("value1")
        expect(wrapper.emitted()["on-change"][0][0][0].data).toEqual(["dataValue1","dataValue2"])
        expect(wrapper.vm.selectValue).toEqual([])
        wrapper.setData({value:[{id:"0",name:"value1"},{id:"1",name:"value2"}]})
        wrapper.vm.setResourceFilter()
        expect(wrapper.vm.selectValue).toEqual([{id:"0",name:"value1"},{id:"1",name:"value2"}])
    })
});