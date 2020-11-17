export class HomePO
{
    public get successAlert()
    {
        return $('#notices .alert-success');
    }

}

export const Home = new HomePO()