import { Button } from '../ui/button';

const TodoCart = () => {
    return (
        <div>
             <div className="flex justify-between border items-center bg-white p-3 rounded-md ">
                    <input type="checkbox" name="" id="" />
                    <p className="font-semibold">Todo Title</p>
                    <p>Time</p>
                    <p>Description</p>
                    <div className="space-x-3">
                        <Button className='bg-red-500'>del</Button>
                        <Button className='bg-[#5C53FE]'>edit</Button>
                    </div>
                </div>
        </div>
    );
};

export default TodoCart;