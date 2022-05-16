import { shallowMount,mount } from '@vue/test-utils';
import RCMLists from '../../../modules/common/components/RCMLists';


describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(RCMLists,{
            propsData: {
                headers:"",
                listData:[],
                loading:false},
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
        expect(wrapper.vm.headers).toEqual("")
        expect(wrapper.vm.listData).toEqual([])    
        expect(wrapper.vm.loading).toEqual(false) 
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.headers).toEqual('string')
        expect(typeof wrapper.vm.listData).toEqual('object')
        expect(typeof wrapper.vm.loading).toEqual('boolean')    
    })

    it('is mocking function properly',()=>{
        let id="0";
        wrapper.vm.clicked(id)
        expect(wrapper.emitted()["routes-tab-event"][0][0]).toEqual(`/patient/${id}`)
        expect(wrapper.emitted()["routes-tab-event"][0][1]).toEqual("Patient Details")       
        id="1";
        wrapper.vm.edit(id)
        expect(wrapper.emitted()["routes-tab-event"][1][0]).toEqual(`/edit-patient/${id}`)
        expect(wrapper.emitted()["routes-tab-event"][1][1]).toEqual("Edit Patient")       
        expect(wrapper.vm.selected).toEqual([])
        wrapper.vm.onSelect([{id:"0",name:"item1"},{id:"1",name:"item2"}])
        expect(wrapper.vm.selected[1].id).toEqual("1")
        expect(wrapper.vm.selected[1].name).toEqual("item2") 
        wrapper.setData({search:"patient2",tempListData:[{id:"0",name:"patient1"},{id:"1",name:"patient2",}]})
        wrapper.vm.searchOnTable()
        expect(wrapper.vm.searched[0].id).toEqual("1")
        expect(wrapper.vm.searched[0].name).toEqual("patient2")
        expect(wrapper.vm.getAlternateLabel(1)).toEqual("1 user selected")
        expect(wrapper.vm.getAlternateLabel(2)).toEqual("2 users selected")
        
        expect(wrapper.vm.formatDate("2022/05/11")).toEqual("11/05/2022")
        
        
    })
});