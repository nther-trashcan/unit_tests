import { shallowMount,mount } from '@vue/test-utils';
import DataTable from '../../../modules/common/components/DataTable';
import 'whatwg-fetch'

describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(DataTable,{
            propsData:{
                columns: ["column1","column2","column3"],
                url: "",
                isFromApi: true,
                tableData: [{id:"0",name:"tableData1",data:[]},{id:"1",name:"tableData2",data:[]},{id:"2",name:"tableData3",data:[]}],
                params: {},
                showSelect: false,
                showErrorIcon: false,
                singleSelect: true,
                loadingText: "Loading... Please wait",
                scope: false ,
                reFetch: false ,
                itemsPerPage:10,
                overwriteColumns: true ,
                dataCypress: "table",
                multiSort: false,
                tableKey: "000",
                filterListByUserLocation: false,
                locationData: [],
                noDataText: "No data available.",
                rowClass: "",
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
        expect(wrapper.vm.columns).toEqual(["column1","column2","column3"])
        expect(wrapper.vm.url).toEqual("")    
        expect(wrapper.vm.isFromApi).toEqual(true)
        expect(wrapper.vm.tableData).toEqual([{id:"0",name:"tableData1",data:[]},{id:"1",name:"tableData2",data:[]},{id:"2",name:"tableData3",data:[]}])
        expect(wrapper.vm.params).toEqual({})
        expect(wrapper.vm.showSelect).toEqual(false)    
        expect(wrapper.vm.showErrorIcon).toEqual(false)    
        expect(wrapper.vm.singleSelect).toEqual(true)
        expect(wrapper.vm.loadingText).toEqual("Loading... Please wait")        
        expect(wrapper.vm.scope).toEqual(false)
        expect(wrapper.vm.reFetch).toEqual(false)    
        expect(wrapper.vm.itemsPerPage).toEqual(10)
        expect(wrapper.vm.overwriteColumns).toEqual(true)    
        expect(wrapper.vm.dataCypress).toEqual("table")
        expect(wrapper.vm.multiSort).toEqual(false)    
        expect(wrapper.vm.tableKey).toEqual("000")
        expect(wrapper.vm.filterListByUserLocation).toEqual(false)    
        expect(wrapper.vm.locationData).toEqual([])
        expect(wrapper.vm.noDataText).toEqual("No data available.")    
        expect(wrapper.vm.rowClass).toEqual("")
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.columns).toEqual('object')
        expect(typeof wrapper.vm.url).toEqual('string')    
        expect(typeof wrapper.vm.isFromApi).toEqual('boolean')
        expect(typeof wrapper.vm.tableData).toEqual('object')
        expect(typeof wrapper.vm.params).toEqual('object')
        expect(typeof wrapper.vm.showSelect).toEqual('boolean')    
        expect(typeof wrapper.vm.showErrorIcon).toEqual('boolean')    
        expect(typeof wrapper.vm.singleSelect).toEqual('boolean')
        expect(typeof wrapper.vm.loadingText).toEqual('string')        
        expect(typeof wrapper.vm.scope).toEqual('boolean')
        expect(typeof wrapper.vm.reFetch).toEqual('boolean')    
        expect(typeof wrapper.vm.itemsPerPage).toEqual('number')
        expect(typeof wrapper.vm.overwriteColumns).toEqual('boolean')    
        expect(typeof wrapper.vm.dataCypress).toEqual('string')
        expect(typeof wrapper.vm.multiSort).toEqual('boolean')    
        expect(typeof wrapper.vm.tableKey).toEqual('string')
        expect(typeof wrapper.vm.filterListByUserLocation).toEqual('boolean')    
        expect(typeof wrapper.vm.locationData).toEqual('object')
        expect(typeof wrapper.vm.noDataText).toEqual('string')    
        expect(typeof wrapper.vm.rowClass).toEqual('string')   
    })

    it('is mocking function properly', async()=>{
        wrapper.setData({
            selected:[{id:"1",name:"tableData2",data:[]}]
        })
        wrapper.vm.selectionChanged()
        expect(wrapper.emitted()["selection-changed"][0][0][0].id).toEqual("1")
        expect(wrapper.emitted()["selection-changed"][0][0][0].name).toEqual("tableData2")
        expect(wrapper.emitted()["selection-changed"][0][0][0].data).toEqual([])
        expect(wrapper.emitted()["selection-changed"][0][1]).toEqual("000")
        
        wrapper.vm.updateOptions({id:"0",name:"event"})
        expect(wrapper.emitted().options[0][0].id).toEqual("0")
        expect(wrapper.emitted().options[0][0].name).toEqual("event")
        
    })
});