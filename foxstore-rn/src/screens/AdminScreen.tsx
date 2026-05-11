import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {collection, deleteDoc, doc, onSnapshot, query, updateDoc, where} from 'firebase/firestore';
import {db} from '../services/firebase';
export const AdminScreen = () => { const [pending,setPending]=useState<any[]>([]);
useEffect(()=>onSnapshot(query(collection(db,'apps'), where('status','==','pending')), s=>setPending(s.docs.map(d=>({id:d.id,...d.data()})))),[]);
const setStatus=(id:string,status:'approved'|'rejected')=>updateDoc(doc(db,'apps',id),{status});
return <View style={{padding:12}}><Text>Admin Panel</Text><FlatList data={pending} renderItem={({item})=><View><Text>{item.name}</Text><Button onPress={()=>setStatus(item.id,'approved')}>Approve</Button><Button onPress={()=>setStatus(item.id,'rejected')}>Reject</Button></View>}/></View>;};
