import { shallowMount,mount } from '@vue/test-utils';
import CustomMenuDropdown from '../../../modules/common/components/CustomMenuDropdown';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(CustomMenuDropdown,{
            propsData:{
                title: "title",
                items: [],
                itemText: "name",
                cssClass: "",
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
        expect(wrapper.vm.itemText).toEqual("name")
        expect(wrapper.vm.cssClass).toEqual("")    
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.title).toEqual('string')
        expect(typeof wrapper.vm.items).toEqual('object')
        expect(typeof wrapper.vm.itemText).toEqual('string') 
        expect(typeof wrapper.vm.cssClass).toEqual('string')    
    })

    it('is mocking function properly',()=>{
        expect(wrapper.vm.flipIcon).toEqual(false)
        expect(wrapper.vm.items).toEqual([])
        wrapper.setData({items:[{id:"0",name:"item1"}]})
        wrapper.vm.documentClicked()
        expect(wrapper.vm.flipIcon).toEqual(true)
        wrapper.vm.modalClosed()
        expect(wrapper.vm.flipIcon).toEqual(false)
        expect(wrapper.vm.truncateText("This text will be trucated if the length is greater than 28")).toEqual("This text will be trucated i...")
        expect(wrapper.vm.disableItem({created:false,creatable:false})).toEqual(true)
        expect(wrapper.vm.tooltipMessage({created:true,creatable:false,name:"document1"})).toEqual('Click to go to "document1"')
        expect(wrapper.vm.tooltipMessage({created:false,creatable:true,name:"document1"})).toEqual('"document1" not created yet, click "ADD DOCUMENT" to create')
        expect(wrapper.vm.tooltipMessage({created:false,creatable:false,name:"document1"})).toEqual('Incomplete Patient Details, Click "EDIT PATIENT" to complete details')
        expect(wrapper.vm.suffixItem({created:true,creatable:false})).toEqual("")
        expect(wrapper.vm.suffixItem({created:false,creatable:true})).toEqual("ADD DOCUMENT")
        expect(wrapper.vm.getDocumentClass({created:true,creatable:false})).toEqual("created--document--color")
        expect(wrapper.vm.getDocumentClass({created:false,creatable:false})).toEqual("disabled")
        expect(wrapper.vm.getDocumentClass({created:false,creatable:true})).toEqual("")
        expect(wrapper.vm.suffixImg({created:false,creatable:false})).toEqual(true)
        expect(wrapper.vm.suffixImg({created:true,creatable:false})).toEqual(false)
        wrapper.vm.clickedItem({id:"0",name:"item1"})
        expect(wrapper.emitted()["on-change"][0][0].id).toEqual("0")
        expect(wrapper.emitted()["on-change"][0][0].name).toEqual("item1")
        wrapper.vm.linkClick({id:"0",name:"item1"})
        expect(wrapper.emitted()["document-clicked"][0][0].id).toEqual("0")
        expect(wrapper.emitted()["document-clicked"][0][0].name).toEqual("item1")
        
    })
});