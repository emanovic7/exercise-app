exercises = ['Axe Hold', 'Bear', 'Bench Press', 'Sitting Calf Raises']
body_part = ['Arms', 'Chest', 'Back', 'Calf']


exercises.each do |exercise|
  Exercise.create(name: exercise, equipment: "Gym Equipment", description: "#{exercise} is good for #{body_part}.")
end
