import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { TasksList } from '../components/TasksList';
import { Task } from '../components/TaskItem';

import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const mesmoTitle = tasks.find(task => task.title === newTaskTitle);

    if (mesmoTitle) {
      return Alert.alert('Task já cadastrada', 'Você não pode cadastrar uma task com o mesmo nome')
    }

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks(oldTasks => [...oldTasks, newTask]);
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map(task => ({ ...task }))

    const foundTask = updatedTasks.find(item => item.id === id);

    if (!foundTask) {
      return;
    }

    foundTask.done = !foundTask.done;
    setTasks(updatedTasks);

  }

  function handleRemoveTask(id: number) {
    Alert.alert('Remover Task','Deseja realmente apagar essa task ?',[
      {
        style: 'cancel',
        text: 'Não',
      },
      {
        style:'destructive',
        text: 'Sim',
        onPress: () => {
          const updatedTask = tasks.filter(task => task.id !== id);
          setTasks(updatedTask);
        }
      } 
    ])
  }


  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})