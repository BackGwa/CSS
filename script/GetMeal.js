// Source code derived from the 'JohnSon with JS' project.

const GetmealZone = (data) => {

  let mealzone = '';

  const hour = new Date().getHours();
  const isbf = data['menu'][0]['breakfast'].length !== 0;
  const islc = data['menu'][0]['lunch'].length !== 0;
  const isdr = data['menu'][0]['dinner'].length !== 0;

  if (isbf && islc && isdr) {
    mealzone = hour >= 0 && hour < 8 ? 'breakfast' : (hour >= 8 && hour < 14 ? 'lunch' : 'dinner');
  } else if (isbf && islc) {
    mealzone = hour >= 0 && hour < 8 ? 'breakfast' : 'lunch';
  } else if (islc && isdr) {
    mealzone = hour >= 0 && hour < 14 ? 'lunch' : 'dinner';
  } else {
    mealzone = islc ? 'lunch' : 'None';
  }

  return mealzone;

}

const mealZone = (data) => {
  let mealzone = GetmealZone(data);
  result = mealzone !== 'None' ? [...data['menu'][0][mealzone]] : [''];
  return result;
};

/** Meal_Request => Returns the proper School Meal Information for the input. */
const Meal_Request = async (schoolType, schoolCode, date = nowdate()) => {
  const API = `https://schoolmenukr.ml/api/${schoolType}/${schoolCode}?year=${date[0]}&month=${date[1]}&date=${date[2]}&allergy=hidden`;
  const response = await fetch(API);
  const data = await response.json();
  const result = mealZone(data);

  MealZone_ChangeText(GetmealZone(data));

  return result;

};

/** NowDate => Function to get the current date into an array */
const nowdate = () => {
  return [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()]
}

const MealZone_ChangeText = (mealZone) => {
  
  const subText = document.getElementById('sub_title');
  const mainText = document.getElementById('main_title');

  switch(mealZone){
    case 'breakfast':
      subText.innerHTML = '피곤해도 먹고싶은'
      mainText.innerHTML = '오늘의 아침은'
      break;
    case 'lunch':
      subText.innerHTML = '자꾸만 기다려지는'
      mainText.innerHTML = '오늘의 점심은'
      break;
    case 'dinner':
      subText.innerHTML = '오늘의 마지막을 장식할'
      mainText.innerHTML = '오늘의 저녁은'
      break;
  }
}