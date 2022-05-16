import { shallowMount,mount } from '@vue/test-utils';
import CalendarFilters from '../../../../modules/appointment/components/appointment/CalendarFilters';
import { formatDateYYYYMMDD } from "../../../../modules/common/utils/helper.js";
import {
    BROWSER_TIMEZONE,
    LOCATION_TIMEZONE,
  } from "../../../../modules/appointment/utils/helper.js";
import moment from 'moment';

describe('Component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(CalendarFilters,{
            propsData: {
                locations: [],
                providers: [],
                rooms: [],
                equipments: [],
                availability: 60,
                pastdate: false ,
                externalView: "",
                userLocations: [],
            
                form: {
                    date: formatDateYYYYMMDD(new Date()),
                    locations: [],
                    providers: [],
                    rooms: [],
                    equipment: [],
                    timezone: LOCATION_TIMEZONE,
                    startTime: "",
                    endTime: "",
                },
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
        expect(wrapper.vm.locations).toEqual([])
        expect(wrapper.vm.providers).toEqual([])    
        expect(wrapper.vm.rooms).toEqual([])
        expect(wrapper.vm.equipments).toEqual([])    
        expect(wrapper.vm.availability).toEqual(60)
        expect(wrapper.vm.pastdate).toEqual(false)    
        expect(wrapper.vm.externalView).toEqual("")
        expect(wrapper.vm.userLocations).toEqual([])    
        expect(wrapper.vm.form.date).toEqual(formatDateYYYYMMDD(new Date()))
        expect(wrapper.vm.form.locations).toEqual([])
        expect(wrapper.vm.form.providers).toEqual([])
        expect(wrapper.vm.form.rooms).toEqual([])
        expect(wrapper.vm.form.equipment).toEqual([])
        expect(wrapper.vm.form.timezone).toEqual(LOCATION_TIMEZONE)
        expect(wrapper.vm.form.startTime).toEqual("")
        expect(wrapper.vm.form.endTime).toEqual("")
    
    })

    it('does mocked data have same data type',()=>{
        expect(typeof wrapper.vm.locations).toEqual('object')
        expect(typeof wrapper.vm.providers).toEqual('object')    
        expect(typeof wrapper.vm.rooms).toEqual('object')
        expect(typeof wrapper.vm.equipments).toEqual('object')    
        expect(typeof wrapper.vm.availability).toEqual('number')
        expect(typeof wrapper.vm.pastdate).toEqual('boolean')    
        expect(typeof wrapper.vm.externalView).toEqual('string')
        expect(typeof wrapper.vm.userLocations).toEqual('object')    
        expect(typeof wrapper.vm.form.date).toEqual('string')
        expect(typeof wrapper.vm.form.locations).toEqual('object')
        expect(typeof wrapper.vm.form.providers).toEqual('object')
        expect(typeof wrapper.vm.form.rooms).toEqual('object')
        expect(typeof wrapper.vm.form.equipment).toEqual('object')
        expect(typeof wrapper.vm.form.timezone).toEqual('string')
        expect(typeof wrapper.vm.form.startTime).toEqual('string')
        expect(typeof wrapper.vm.form.endTime).toEqual('string')   
    })


    it('is mocking function properly',()=>{
        wrapper.vm.locationValues()  
        expect(wrapper.vm.selectScroll).toEqual(0)
        wrapper.vm.setLocation([{id:"0",name:"location1"},{id:"1",name:"location2"}])
        expect(wrapper.vm.calandarFilter.locations[0].id).toEqual("0")
        expect(wrapper.vm.calandarFilter.locations[0].name).toEqual("location1")
        expect(wrapper.vm.selectScroll).toEqual(1)
        wrapper.vm.setProvider([{id:"0",name:"provider1"},{id:"1",name:"provider2"}])
        expect(wrapper.vm.calandarFilter.providers[0].id).toEqual("0")
        expect(wrapper.vm.calandarFilter.providers[0].name).toEqual("provider1")
        expect(wrapper.vm.selectScroll).toEqual(2)
        wrapper.vm.setRooms([{id:"0",name:"room1"},{id:"1",name:"room2"}])
        expect(wrapper.vm.calandarFilter.rooms[0].id).toEqual("0")
        expect(wrapper.vm.calandarFilter.rooms[0].name).toEqual("room1")
        expect(wrapper.vm.selectScroll).toEqual(3)
        wrapper.vm.setEquipment([{id:"0",name:"equipment1"}])
        expect(wrapper.vm.calandarFilter.equipment[0].id).toEqual("0")
        expect(wrapper.vm.calandarFilter.equipment[0].name).toEqual("equipment1")
        expect(wrapper.vm.selectScroll).toEqual(4)
        wrapper.vm.setTimeZone()
        wrapper.vm.setDefaultValues()
        expect(wrapper.vm.calandarFilter.date).toEqual(formatDateYYYYMMDD(new Date()))
        expect(wrapper.vm.calandarFilter.locations).toEqual([])
        expect(wrapper.vm.calandarFilter.providers).toEqual([])
        expect(wrapper.vm.calandarFilter.rooms).toEqual([])
        expect(wrapper.vm.calandarFilter.equipment).toEqual([])
        expect(wrapper.vm.calandarFilter.timezone).toEqual(LOCATION_TIMEZONE)
        expect(wrapper.vm.calandarFilter.startTime).toEqual("")
        expect(wrapper.vm.calandarFilter.endTime).toEqual("")
        expect(wrapper.vm.externalView).toEqual("")
        wrapper.vm.calenderDateLimit()
        expect(wrapper.vm.mindate).toEqual("")
        expect(wrapper.vm.maxdate).toEqual("")
        wrapper.setData({externalView:"waitlist-view"})
        wrapper.vm.calenderDateLimit()
        expect(wrapper.vm.mindate).toEqual(formatDateYYYYMMDD(moment()))
        expect(wrapper.vm.maxdate).toEqual("")
        wrapper.setData({pastdate:true})
        wrapper.vm.calenderDateLimit()
        expect(wrapper.vm.maxdate).toEqual(formatDateYYYYMMDD(moment()))
        expect(wrapper.vm.mindate).toEqual("")

    })
});