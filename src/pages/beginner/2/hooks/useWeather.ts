const api = {
  KEY: "4d8fb5b93d4af21d66a2948710284366",
  URL: "https://api.openweathermap.org/data/2.5/weather"
}
export interface Weather {
  base?: string
  clouds?: any
  cod?: number
  coord?: any
  dt?: number
  id?: number
  main?: {
    temp:number
  }
  name?: string
  sys?: any
  timezone?: number
  visibility?: number
  weather?: any
  wind?: any
}
interface ErrorWeather {
  cod?: string,
  message?: string
}
export function useWeather(inputVal: string) {
  let error = $ref<ErrorWeather>({})
  let data = $ref<Weather>({})
  const url = `${api.URL}?q=${inputVal}&appid=${api.KEY}&units=metric`
  async function getWeather() {
    try {
      const ret: Weather = await fetch(url).then(res => res.json())
      data = ret
    } catch (e: any) {
      error = e
    }
    return { data, error }
  }
  return { getWeather }
}