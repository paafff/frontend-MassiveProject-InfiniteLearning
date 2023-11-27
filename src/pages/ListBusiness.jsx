import React, { useState } from 'react'
import Layout from './Layout'
import ComponentListBusiness from '../components/ListBusiness';

const listCity = [
    {
        id: 0,
        name: "Malang"
    },
    {
        id: 1,
        name: "Surabaya"
    },
    {
        id: 2,
        name: "Blitar"
    },
    {
        id: 3,
        name: "Tulungagung"
    },
    {
        id: 4,
        name: "Sidoarjo"
    },
    {
        id: 5,
        name: "Kediri"
    },
    {
        id: 6,
        name: "Gresik"
    },
    {
        id: 7,
        name: "Solo"
    },
]

const dataBarber = [
    {
        id: 0,
        name: "Javanese",
        city: "Depok",
        open: "09:00",
        close: "18:00",
    },
    {
        id: 1,
        name: "Javanese",
        city: "Depok",
        open: "09:00",
        close: "18:00",
    },
    {
        id: 2,
        name: "Javanese",
        city: "Depok",
        open: "09:00",
        close: "18:00",
    },
    {
        id: 3,
        name: "Javanese",
        city: "Depok",
        open: "09:00",
        close: "18:00",
    },
    {
        id: 4,
        name: "Javanese",
        city: "Depok",
        open: "09:00",
        close: "18:00",
    },
    {
        id: 5,
        name: "Javanese",
        city: "Depok",
        open: "09:00",
        close: "18:00",
    },
    {
        id: 6,
        name: "Javanese",
        city: "Depok",
        open: "09:00",
        close: "18:00",
    },
    {
        id: 7,
        name: "Javanese",
        city: "Depok",
        open: "09:00",
        close: "18:00",
    },
]

const dataSalon = [
    {
        id: 0,
        name: "D'Moze",
        city: "Bogor",
        open: "09:00",
        close: "18:00",
    },
    {
        id: 1,
        name: "D'Moze",
        city: "Bogor",
        open: "09:00",
        close: "18:00",
    },
    {
        id: 2,
        name: "D'Moze",
        city: "Bogor",
        open: "09:00",
        close: "18:00",
    },
    {
        id: 3,
        name: "D'Moze",
        city: "Bogor",
        open: "09:00",
        close: "18:00",
    },
    {
        id: 4,
        name: "D'Moze",
        city: "Bogor",
        open: "09:00",
        close: "18:00",
    },
    {
        id: 5,
        name: "D'Moze",
        city: "Bogor",
        open: "09:00",
        close: "18:00",
    },
    {
        id: 6,
        name: "D'Moze",
        city: "Bogor",
        open: "09:00",
        close: "18:00",
    },
    {
        id: 7,
        name: "D'Moze",
        city: "Bogor",
        open: "09:00",
        close: "18:00",
    },
]


const ListBusiness = ({ page }) => {

    return (
        <Layout>

            <ComponentListBusiness listCity={listCity} page={page} dataList={page == "Barbershop" ? dataBarber : dataSalon} />

        </Layout>
    )
}


export default ListBusiness