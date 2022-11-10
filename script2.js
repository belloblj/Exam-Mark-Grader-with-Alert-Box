/*You are given a variable marks. Your task is to print:
 - AA if marks is greater than 90.
 - AB if marks is greater than 80 and less than or equal to 90.
 - BB if marks is greater than 70 and less than or equal to 80.
 - BC if marks is greater than 60 and less than or equal to 70.
 - CC if marks is greater than 50 and less than or equal to 60.
 - CD if marks is greater than 40 and less than or equal to 50.
 - DD if marks is greater than 30 and less than or equal to 40.
 - FF if marks is less than or equal to 30*/

function marksgrade()
{
if (document.form.text1.value >90 || document.form.text1.value === 100)
alert('Grade AA');
else
if (document.form.text1.value >80 || document.form.text1.value === 90)
{
alert('Grade AB');
}
else
if (document.form.text1.value >70 || document.form.text1.value ===80)
{
alert('Grade BB');
}
else
if (document.form.text1.value >60 || document.form.text1.value ===70)
{
alert('Grade BC');
}
else
if (document.form.text1.value >50 || document.form.text1.value ===60)
{
alert('Grade CC');
}else
if (document.form.text1.value >40 || document.form.text1.value ===50)
{
alert('Grade CD');
}else
if (document.form.text1.value >30 || document.form.text1.value ===40)
{
alert('Grade DD');
}
else
if (document.form.text1.value <30)
{
alert('Grade FF');
}
else
alert('Check your entry');
}

