import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../shadcnUi/card';

interface CardProps {
    title: string;
    description: string;
    content: any;
    addDate: Date;
    size: number;
    addedBy: string;
}
const AlbumCard = ({ title, description, content, addDate, size, addedBy }: CardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{content}</p>
            </CardContent>
            <CardFooter>
                <p>added: {addDate.toLocaleDateString()}</p>
                <p>added by: {addedBy}</p>
                <p>image size: {size} MB</p>
            </CardFooter>
        </Card>
    );
};

export default AlbumCard;
