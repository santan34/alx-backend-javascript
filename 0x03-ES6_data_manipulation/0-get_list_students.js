export default function getListStudents() {
  const list = [];
  const obj1 = {
    id: 1,
    firstname: 'Guillaume',
    location: 'San Francisco',
  };

  const obj2 = {
    id: 2,
    firstname: 'James',
    location: 'Columbia',
  };

  const obj3 = {
    id: 5,
    firstname: 'Serena',
    location: 'San Francisco',
  };

  list.push(obj1, obj2, obj3);
  return list;
}
