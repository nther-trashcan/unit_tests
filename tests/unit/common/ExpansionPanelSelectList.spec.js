import { shallowMount,mount } from '@vue/test-utils';
import ExpansionPanelSelectList from '../../../modules/common/components/ExpansionPanelSelectList';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(ExpansionPanelSelectList,{
            propsData:{
                title: "title",
                items: [],
                rules: [],
                itemText: "itemText",
                itemValue: "itemValue",
                value: [],
                multiple: true ,
                selectAll: true ,
                expand: false ,
                // barGraph: false ,
                disabled: false ,
                selectScroll: 0,
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
        expect(wrapper.vm.title).toEqual("title")
        expect(wrapper.vm.items).toEqual([])    
        expect(wrapper.vm.rules).toEqual([])
        expect(wrapper.vm.itemText).toEqual("itemText")    
        expect(wrapper.vm.itemValue).toEqual("itemValue")
        expect(wrapper.vm.value).toEqual([])    
        expect(wrapper.vm.multiple).toEqual(true)
        expect(wrapper.vm.selectAll).toEqual(true)    
        expect(wrapper.vm.expand).toEqual(false)
        expect(wrapper.vm.disabled).toEqual(false)    
        expect(wrapper.vm.selectScroll).toEqual(0)
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.title).toEqual('string')
        expect(typeof wrapper.vm.items).toEqual('object')    
        expect(typeof wrapper.vm.rules).toEqual('object')
        expect(typeof wrapper.vm.itemText).toEqual('string')    
        expect(typeof wrapper.vm.itemValue).toEqual('string')
        expect(typeof wrapper.vm.value).toEqual('object')    
        expect(typeof wrapper.vm.multiple).toEqual('boolean')
        expect(typeof wrapper.vm.selectAll).toEqual('boolean')    
        expect(typeof wrapper.vm.expand).toEqual('boolean')
        expect(typeof wrapper.vm.disabled).toEqual('boolean')    
        expect(typeof wrapper.vm.selectScroll).toEqual('number')
    })

    it('is mocking function properly',()=>{
        expect(wrapper.vm.readonly).toEqual(false)
        wrapper.vm.searchItem()
        expect(wrapper.vm.readonly).toEqual(true)
        wrapper.setData({seachValue:"value to be searched"})
        expect(wrapper.vm.seachValue).toEqual("value to be searched")
        wrapper.vm.closeItem()  
        expect(wrapper.vm.readonly).toEqual(false)
        expect(wrapper.vm.seachValue).toEqual("")
        expect(wrapper.vm.background({highlight:true}).background).toEqual("#eff7ff")
        expect(wrapper.vm.isAvailablity({availability:[{id:"0",value:"availabilityValue1"},{id:"1",value:"availabilityValue2"},{id:"2",value:"availabilityValue3"}]})).toEqual("availabilityValue1")
        expect(wrapper.vm.pieStyle({availability:[{id:"0",value:"availabilityValue1",color:"#eff7ff"}]}).background).toEqual("conic-gradient(#eff7ff 0 0availabilityValue1%)")
        expect(wrapper.vm.graphData).toEqual(undefined)
        expect(wrapper.vm.selectedValue).toEqual([])
        wrapper.setData({items:[{id:"0",name:"item1",itemValue:"itemValue1"},{id:"1",name:"item2",itemValue:"itemValue2"},{id:"2",name:"item3",itemValue:"itemValue3"}]})
        wrapper.vm.selectAllValue()
        expect(wrapper.vm.selectedValue).toEqual(["itemValue1","itemValue2","itemValue3"])
        
        
        
        
    })
});