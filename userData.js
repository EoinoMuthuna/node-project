import userModel from './api/users/usersModel';


const users = [
  {
    'username': 'aaron',
    'password': 'dylan',
  },
  {
    'username': 'tess',
    'password': 'luis',
  },
];

export const loadUsers = () => {
  userModel.find({}).remove(() => {
    users.forEach((user)=>{
                userModel.create(user, (err, docs)=>{
                if (err) {
                    console.log(`failed to Load User Data: ${err}`);
                }
                }
              );
});
    console.info(`${users.length} users were successfully stored.`);
});
};
