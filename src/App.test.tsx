/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, } from "@testing-library/react";
import App from "./App";

import '@testing-library/jest-dom'
import axios from "axios";
import userEvent from "@testing-library/user-event";


jest.mock('axios');

interface UsersResponse{
    data: {
        total_count: number,
        items: IResponse[],
    }
}

interface IResponse{
    id: number,
    avatar_url: string,
    login: string,
    site_admin: boolean,
    name: string,
    followers: number,
    following: number,
    public_repos: number,
}

const usersResp:UsersResponse = {
    data: {
        total_count: 3,
        items: [
            {
                id: 1,
                avatar_url: 'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638882786/EducationHub/photos/sun-blasts-a-m66-flare.jpg',
                login: 'sunny',
                site_admin: true,
                name: 'Sun',
                followers: 8,
                following: 1,
                public_repos: 800000000,
            },
            {
                id: 2,
                avatar_url: 'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638882786/EducationHub/photos/sun-blasts-a-m66-flare.jpg',
                login: 'siri',
                site_admin: false,
                name: 'Sirius',
                followers: 12,
                following: 1,
                public_repos: 800000001,
            },
            {   id: 3,
                avatar_url: 'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638882786/EducationHub/photos/sun-blasts-a-m66-flare.jpg',
                login: 'alph',
                site_admin: false,
                name: 'Alpha',
                followers: 4,
                following: 1,
                public_repos: 800000002,
            },
        ]
    }
}

describe('TEST API', () => {
    let response1: UsersResponse;

    beforeEach(() => {
        response1 = usersResp;
    })

    test('Base test for elements\' appearence on "Users" page', () => {
        render(<App/>);
        const userList = screen.getByPlaceholderText<HTMLInputElement>(/Введите логин.../i);
        expect(userList).toBeInTheDocument();

        const sortSelect = screen.getByRole<HTMLSelectElement>('combobox');
        expect(sortSelect).toBeInTheDocument();

        const sortOptions = screen.getAllByRole('option');
        for(let sortOption of sortOptions){
            expect(sortOption).toBeInTheDocument();
        }
    });


    test("User list elements' data from server on 'Users' page test", async () => {
        (axios.get as jest.Mock).mockResolvedValue(response1);
        render(<App/>);

        const userList = await screen.findAllByTestId<HTMLLIElement>('user-item');
        expect(userList.length).toBe(3);
        expect(userList[0]).toBeInTheDocument();
        
        const usersPage = await screen.findByTestId<HTMLDivElement>('users-page');
        expect(usersPage).toBeInTheDocument();
        //screen.debug();
    });

    test("Router test", async () => {
        (axios.get as jest.Mock).mockResolvedValue(response1);
        
        render(<App/>)
        const userRefs = await screen.findAllByTestId<HTMLAnchorElement>('user-page-ref');

        
        userEvent.click(userRefs[0]);
        const singlePage = await screen.findByTestId<HTMLDivElement>('single-page');
        expect(singlePage).toBeInTheDocument();
    })

    
    test("User data from server on 'Single' page test", async () => {
        (axios.get as jest.Mock).mockResolvedValue(response1);
        render(<App/>);

        const userImg = await screen.findByTestId<HTMLImageElement>('user-image');
        expect(userImg).toBeInTheDocument();
        //screen.debug();
    });
    
})
