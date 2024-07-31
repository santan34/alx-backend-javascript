const getStudentsByLocation = (list, city) => list.filter((elem) => elem.location === city);

export default getStudentsByLocation;
