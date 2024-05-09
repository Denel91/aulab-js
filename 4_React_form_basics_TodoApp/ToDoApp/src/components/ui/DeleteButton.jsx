import {Button} from "@nextui-org/react";
import { Trash2 } from 'lucide-react';

export default function DeleteButton({children, onClick}) {
    return (
        <Button isIconOnly onClick={onClick} color="danger" variant="light" endContent={<Trash2/>}>{children}</Button>
    );
}
