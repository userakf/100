const api = {
  KEY: "4d8fb5b93d4af21d66a2948710284366",
  URL: "https://api.openweathermap.org/data/2.5/weather"
}
export function useWeather(inputVal: string) {
  let weatherMain = reactive<{ temp:number }>({
    temp:-1
  })
  let weatherName = $ref(null)
  let weatherData = $ref(null)
  const url = `${api.URL}?q=${inputVal}&appid=${api.KEY}&units=metric`
  async function getWeather() {
    const ret = await fetch(url).then(res => res.json())
    const { main, name } = ret;
    weatherData = ret
    weatherMain = main
    weatherName = name
    return { data: weatherData, main: weatherMain, name: weatherName }
  }
  return { getWeather }
}