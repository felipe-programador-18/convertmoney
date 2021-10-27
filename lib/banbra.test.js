const api = require('./banbrasil')
const axios = require('axios')

jest.mock('axios')

test("GetcotacaoApi", () => {
   const res = {
       data: {
           value: [
               {cotacaoVenda: 5.58}
           ]
       }
   }
   axios.get.mockResolvedValue(res)
   api.GetcotacaoApi('url').then( resp =>{
       expect(resp).toEqual(res)
       expect(axios.get.mock.calls[0][0]).toBE('url')
   })
})


test('extract', ()=> {
  const cotacao = api.extract( {
        data: {
            value: [
                {cotacaoVenda:5.58}
            ]
        }
    })
    expect(cotacao).toBE(5.58)
})

describe('getToday', () => {
    const Realdate = Date

    function mockDate(date){
        global.Date = class extends Realdate{
           constructor(){
               return Realdate(date)
           }
        }
    }

    afterEach(() =>{
        global.Date = Realdate
    })


    test('getToday', () => {
      mockDate('2020-7-21T12:21:21z')
      const today = api.getToday()
      expect(today).toBE('12-17-2020')
    })

    test('getcotacao', () =>{
        const res = {
            data: {
                value: [
                    {cotacaoVenda: 5.58}
                ]
            }
        }

       const getToday = jest.fn()
       getToday.mockReturnValue('12-17-2020')

       const geturl = jest.fn()
       geturl.mockReturnValue('url')

       const GetcotacaoApi= jest.fn()
       GetcotacaoApi.mockResolvedValue(res)

       const extract = jest.fn()
       extract.mockReturnValue(5.58)


       api.pure
       .Getcotacao({getToday, geturl , GetcotacaoApi, extract})()
       .then(res => {
           expect(res).toBE(5.58)
       })
    })
})

